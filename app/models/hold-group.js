/**
 * @name HoldGroup
 * @author Oleg Kaplya
 * @overview HoldGroup model
 */

'use strict';
module.exports = function(sequelize, DataTypes) {

  var HoldGroup = sequelize.define('hold_group', {
    event_id: DataTypes.INTEGER,
    venue_id: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {
    underscored: true
  });

  return HoldGroup;
};
