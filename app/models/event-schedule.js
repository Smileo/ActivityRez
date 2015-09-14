/**
 * @name EventSchedule
 * @author Oleg Kaplya
 * @overview EventSchedule model
 */

'use strict';
module.exports = function(sequelize, DataTypes) {

  var EventSchedule = sequelize.define('event_schedule', {
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    blackout_date: DataTypes.DATE
  }, {
    underscored: true,
    tableName: 'event_schedule',
    classMethods: {
      associate: function(models) {
        EventSchedule.belongsTo(models.event)
      }
    }
  });

  return EventSchedule;
};
