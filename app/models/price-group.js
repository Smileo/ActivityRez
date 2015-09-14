/**
 * @name PriceGroup
 * @author Oleg Kaplya
 * @overview PriceGroup model.
 */

'use strict';
module.exports = function(sequelize, DataTypes) {

  var PriceGroup = sequelize.define('price_group', {
    title: DataTypes.STRING,
    data: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {
    underscored: true
  });

  return PriceGroup;
};
