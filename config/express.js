'use strict';
var express = require('express'),
    glob = require('glob'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    compress = require('compression'),
    methodOverride = require('method-override'),
    epilogue = require('epilogue'),
    db = require('../app/models'),
    swagger = require('swagger-express');

module.exports = function(app, config) {
  var env = process.env.NODE_ENV || 'development';
  app.locals.ENV = env;
  app.locals.ENV_DEVELOPMENT = env == 'development';

  app.set('views', config.root + '/app/views');
  app.set('view engine', 'jade');

  /**
   * Init Middlewares
   */
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cookieParser());
  app.use(compress());
  app.use(express.static(config.root + '/public'));
  app.use(methodOverride());
  app.use(swagger.init(app, {
    apiVersion: '1.0',
    swaggerVersion: '1.0',
    swaggerURL: '/explorer',
    swaggerJSON: '/api-docs.json',
    swaggerUI: './public/components/swagger-ui/dist/',
    basePath: 'http://localhost:3000/api/v1',
    info: {
      title: 'ActivityRez API',
      description: 'ActivityRez API explorer'
    },
    apis: [ './app/rest/event.js',
            './app/rest/price-group.js',
            './app/rest/venue.js',
            './app/rest/venue-type.js',
            './app/rest/hold-group.js',
          ],
    middleware: function(req, res){}
  }));

  /**
   * Init REST API middleware
   */
  epilogue.initialize({
    app: app,
    sequelize: db
  });

  var restResources = glob.sync(config.root + '/app/rest/*.js');
  restResources.forEach(function (restResource) {
    require(restResource);
  });

  var controllers = glob.sync(config.root + '/app/controllers/*.js');
  controllers.forEach(function (controller) {
    require(controller)(app);
  });

  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  if(app.get('env') === 'development'){
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err,
        title: 'error'
      });
    });
  }

  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
      });
  });
};
