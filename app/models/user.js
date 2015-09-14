/**
 * @name User
 * @author Oleg Kaplya
 * @overview User model.
 */

'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        User.belongsTo(models.user_group)
      }
    },
  });
  return User;
};
