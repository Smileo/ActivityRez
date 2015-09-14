/**
 * @name HoldGroup
 * @author Oleg Kaplya
 * @overview Hold Groups API resource
 *
 * @swagger
 * resourcePath: /holdGroup
 * description: All about API
 */

'use strict';
var epilogue = require('epilogue'),
    db = require('../models'),
    config = require('../../config/config');

/**
 * @swagger
 * path: /hold-groups
 * operations:
 *   -  httpMethod: GET
 *      summary: Get hold group list
 *      notes: Returns list of events
 *      responseClass: PriceGroup
 *
 */
 /** @swagger
 * path: /hold-group/{holdGroupID}
 * operations:
 *   -  httpMethod: GET
 *      summary: Return hold group object by ID
 *      notes: Return hold group object by ID
 *      responseClass: HoldGroup
 *      parameters:
 *        - name: holdGroupID
 *          description: hold group ID
 *          paramType: path
 *          required: true
 *          dataType: integer
 */
var resource = epilogue.resource({
  model: db.hold_group,
  associations: true,
  endpoints: [config.apiPrefix + 'hold-groups', config.apiPrefix + 'hold-group/:id']
});

/**
 * @swagger
 * models:
 *   HoldGroup:
 *     id: HoldGroup
 *     properties:
 *       holdGroupID:
 *         type: integer
 */
