/**
 * @name HomeController
 * @author Oleg Kaplya
 * @overview Home controller
 */

'use strict';
var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function(app) {
  app.use('/', router);
};

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'ActivityRez'
  });
});
