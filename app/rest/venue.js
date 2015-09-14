/**
 * @name Venue
 * @author Oleg Kaplya
 * @overview Venue API resource
 *
 * @swagger
 * resourcePath: /venue
 * description: All about API
 */

'use strict';
var epilogue = require('epilogue'),
  db = require('../models'),
  config = require('../../config/config');

/**
 * @swagger
 * path: /venues
 * operations:
 *   -  httpMethod: GET
 *      summary: Get venue list
 *      notes: Returns list of venues
 *      responseClass: Venue
 *
 */
 /** @swagger
 * path: /venue/{venueID}
 * operations:
 *   -  httpMethod: GET
 *      summary: Return venue object by ID
 *      notes: Return venue object by ID
 *      responseClass: Venue
 *      parameters:
 *        - name: venueID
 *          description: venue ID
 *          paramType: path
 *          required: true
 *          dataType: integer
 */
var resource = epilogue.resource({
  model: db.venue,
  associations: true,
  endpoints: [config.apiPrefix + 'venues', config.apiPrefix + 'venue/:id']
});

/**
 * @swagger
 * models:
 *   Venue:
 *     id: venue
 *     properties:
 *       venueID:
 *         type: integer
 */
