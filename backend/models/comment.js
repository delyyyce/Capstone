'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      
      Comment.belongsTo(models.User, { foreignKey: 'userId' });
      
      Comment.belongsTo(models.Review, { foreignKey: 'reviewId' });
    }
  }
  Comment.init({
    userId: DataTypes.INTEGER,
    reviewId: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
