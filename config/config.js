'use strict';
var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'activityrez'
    },
    port: 3000,
    db: 'mysql://activityrez:SD64498(*&aasdAS@localhost/activityrez_development',
    apiPrefix: '/api/v1/'
  },

  test: {
    root: rootPath,
    app: {
      name: 'activityrez'
    },
    port: 3000,
    db: 'mysql://activityrez:SD64498(*&aasdAS@localhost/activityrez_test',
    apiPrefix: '/api/v1/'
  },

  production: {
    root: rootPath,
    app: {
      name: 'activityrez'
    },
    port: 3000,
    db: 'mysql://activityrez:SD64498(*&aasdAS@localhost/activityrez_production',
    apiPrefix: '/api/v1/'
  }
};

module.exports = config[env];
