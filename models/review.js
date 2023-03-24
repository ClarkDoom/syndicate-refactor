'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.Show, {
        foreignKey: 'reviewFor'
      })
      Review.hasMany(models.Comment, {
        foreignKey: 'createdBy', 
        as: 'comments'
      })
    }
  }
  Review.init({
    reviewContent: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    author: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id'
      }
    },
    tmbdShowId: DataTypes.STRING,
    reviewFor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Shows',
        key: 'id'
      }
    },
    reviewTitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};