/**
 * @name Event
 * @author Oleg Kaplya
 * @overview Event model
 */

'use strict';
module.exports = function(sequelize, DataTypes) {

  var Event = sequelize.define('event', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    data: DataTypes.TEXT
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
          Event.belongsTo(models.price_group),
          Event.belongsTo(models.venue),
          Event.hasMany(models.event_schedule, {
            as: 'schedule'
          })
      }
    }
  });

  return Event;
};
