'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    static associate(models) {
      Show.belongsTo(models.Profile, {
        foreignKey: 'addedBy',
        as: 'profile'
      })
      Show.hasMany(models.Review, {
        foreignKey: "reviewFor",
        as: 'reviews'
      })
    }
  }
  Show.init({
    tmbdShowId: {
      type: DataTypes.STRING,
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id'
      }
    },
    showName: {
      type: DataTypes.STRING,
    },
    showDescription: {
      type: DataTypes.TEXT,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    showType: {
      type: DataTypes.ENUM('watchlist', 'currently watching', 'seen it', 'favorite')
    },
  }, {
    sequelize,
    modelName: 'Show',
  });
  return Show;
};