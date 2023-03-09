'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    static associate(models) {
      Show.belongsTo(models.Profile, {
        foreignKey: 'addedBy'
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
    listType: {
      type: DataTypes.ENUM('watchlist', 'currently watching', 'seen it')
    },
  }, {
    sequelize,
    modelName: 'Show',
  });
  return Show;
};