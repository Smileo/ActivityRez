/**
 * @name UserGroup
 * @author Oleg Kaplya
 * @overview UserGroup model.
 */

'use strict';
module.exports = function(sequelize, DataTypes) {

  var UserGroup = sequelize.define('user_group', {
    name: DataTypes.STRING
  }, {
    underscored: true
  });

  return UserGroup;
};
