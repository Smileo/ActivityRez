/**
 * @name VenueType
 * @author Oleg Kaplya
 * @overview Venue Types API resource
 *
 * @swagger
 * resourcePath: /priceGroup
 * description: All about API
 */

'use strict';
var epilogue = require('epilogue'),
  db = require('../models'),
  config = require('../../config/config');

/**
 * @swagger
 * path: /venue-types
 * operations:
 *   -  httpMethod: GET
 *      summary: Get venue-type list
 *      notes: Returns list of venue-types
 *      responseClass: VenueType
 *
 */
 /** @swagger
 * path: /venue-type/{venueTypeID}
 * operations:
 *   -  httpMethod: GET
 *      summary: Return venue-type object by ID
 *      notes: Return venue-type object by ID
 *      responseClass: VenueType
 *      parameters:
 *        - name: venueTypeID
 *          description: venue type ID
 *          paramType: path
 *          required: true
 *          dataType: integer
 */
var resource = epilogue.resource({
  model: db.venue_type,
  associations: true,
  endpoints: [config.apiPrefix + 'venue-types', config.apiPrefix + 'venue-type/:id']
});

/**
 * @swagger
 * models:
 *   VenueType:
 *     id: venue
 *     properties:
 *       venueTypeID:
 *         type: integer
 */
