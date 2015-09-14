/**
 * @name VenueType
 * @author Oleg Kaplya
 * @overview VenueType model.
 */

'use strict';
module.exports = function(sequelize, DataTypes) {

  var VenueType = sequelize.define('venue_type', {
    title: DataTypes.STRING,
    layout: DataTypes.TEXT
  }, {
    underscored: true
  });

  return VenueType;
};
