'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      
      Item.belongsTo(models.Category, { foreignKey: 'categoryId' });
      
      Item.hasMany(models.Review, { foreignKey: 'itemId' });
    }
  }
  Item.init({
    name: DataTypes.STRING,
    details: DataTypes.TEXT,
    avgRating: DataTypes.FLOAT,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
