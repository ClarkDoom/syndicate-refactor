'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init({
    reviewContent: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    author: DataTypes.INTEGER,
    tmbdShowId: DataTypes.STRING,
    showTitle: DataTypes.STRING,
    reviewTitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};