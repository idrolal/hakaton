'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      image: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      speed: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      health: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      power: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
        characterId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Characters',
          key: 'id',
        },
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
    await queryInterface.dropTable('Roles');
  }
};