/**
 * @name Event
 * @author Oleg Kaplya
 * @overview Event API resource
 *
 * @swagger
 * resourcePath: /events
 * description: All about API
 */

'use strict';
var epilogue = require('epilogue'),
    db = require('../models'),
    config = require('../../config/config');

/**
 * @swagger
 * path: /events
 * operations:
 *   -  httpMethod: GET
 *      summary: Get events list
 *      notes: Returns list of events
 *      responseClass: Event
 *
 */
 /** @swagger
 * path: /event/{eventID}
 * operations:
 *   -  httpMethod: GET
 *      summary: Return event object by ID
 *      notes: Return event object by ID
 *      responseClass: Event
 *      parameters:
 *        - name: eventID
 *          description: Event ID
 *          paramType: path
 *          required: true
 *          dataType: integer
 */
var resource = epilogue.resource({
  model: db.event,
  associations: true,
  endpoints: [config.apiPrefix + 'events', config.apiPrefix + 'event/:id']
});

/**
 * @swagger
 * models:
 *   Event:
 *     id: Event
 *     properties:
 *       eventID:
 *         type: integer
 */
