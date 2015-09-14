/**
 * @name TheaterController
 * @author Oleg Kaplya
 * @overview Theater controller
 */

'use strict';
var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function(app) {
  app.use('/', router);
};

router.get('/theater', function(req, res, next) {
  db.venue.findOne({
    where: {
      id: 1
    },
    include: [{
      model: db.venue_type
    }]
  }).then(function(venue) {
    res.render('theater', {
      title: 'ActivityRez Theater',
      venue: venue
    });
  })
});
