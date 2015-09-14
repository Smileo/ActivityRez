/**
 * @name PriceGroup
 * @author Oleg Kaplya
 * @overview Price Group API resource
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
 * path: /price-groups
 * operations:
 *   -  httpMethod: GET
 *      summary: Get price group list
 *      notes: Returns list of events
 *      responseClass: PriceGroup
 *
 */
 /** @swagger
 * path: /price-group/{priceGroupID}
 * operations:
 *   -  httpMethod: GET
 *      summary: Return price group object by ID
 *      notes: Return price group object by ID
 *      responseClass: PriceGroup
 *      parameters:
 *        - name: priceGroupID
 *          description: price group ID
 *          paramType: path
 *          required: true
 *          dataType: integer
 */
var resource = epilogue.resource({
  model: db.price_group,
  associations: true,
  endpoints: [config.apiPrefix + 'price-groups', config.apiPrefix + 'price-group/:id']
});

/**
 * @swagger
 * models:
 *   PriceGroup:
 *     id: PriceGroup
 *     properties:
 *       priceGroupID:
 *         type: integer
 */
