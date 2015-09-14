/**
 * @name Seat
 * @author Oleg Kaplya
 * @overview Seat model.
 */

'use strict';
module.exports = function(sequelize, DataTypes) {

  var Seat = sequelize.define('seat', {
    event_id: DataTypes.INTEGER,
    venue_id: DataTypes.INTEGER,
    hold_group_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    status: DataTypes.ENUM('active', 'hold', 'booked')
  }, {
    underscored: true
  });

  return Seat;
};
