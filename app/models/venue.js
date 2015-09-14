/**
 * @name Venue
 * @author Oleg Kaplya
 * @overview Venue model.
 */

'use strict';
module.exports = function(sequelize, DataTypes) {

  var Venue = sequelize.define('venue', {
    title: DataTypes.STRING
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        Venue.belongsTo(models.venue_type)
      }
    }
  });

  return Venue;
};
