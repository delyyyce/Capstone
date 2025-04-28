'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // Each review belongs to one user…
      Review.belongsTo(models.User, { foreignKey: 'userId' });
      // …and one item
      Review.belongsTo(models.Item, { foreignKey: 'itemId' });
      // …and can have many comments
      Review.hasMany(models.Comment, { foreignKey: 'reviewId' });
    }
  }
  Review.init({
    userId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
