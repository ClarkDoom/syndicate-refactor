'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.belongsTo(models.User, { foreignKey: 'userId' })
      Profile.hasMany(models.Show, {
        foreignKey: 'addedBy',
        as: 'shows'
      })
      Profile.hasMany(models.Comment, {
        foreignKey: 'createdBy',
        as: 'comments'
      })
    }
  }

  Profile.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    aboutMe: {
      type: DataTypes.TEXT,
    }
  },
  {
    sequelize,
    modelName: 'Profile',
  })
  return Profile
}
