'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.Review, {
        foreignKey: 'commentOn'
      })
      Comment.belongsTo(models.Profile, {
        foreignKey: 'createdBy',
        as: "commentBy"
      })
    }
  }
  Comment.init({
    commentText: DataTypes.TEXT,
    commentOn: DataTypes.INTEGER,
    reaction: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};