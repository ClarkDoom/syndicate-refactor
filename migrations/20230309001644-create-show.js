'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tmbdShowId: {
        type: Sequelize.STRING
      },
      addedBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Profiles',
          key: 'id'
        }
      },
      showName: {
        type: Sequelize.STRING
      },
      showDescription: {
        type: Sequelize.TEXT
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      showType: {
        type: Sequelize.ENUM('watchlist', 'currently watching', 'seen it', 'favorite')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shows');
  }
};