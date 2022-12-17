'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Monsters', {
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
      health: {
        allowNull: false,
        defaultValue: 10,
        type: Sequelize.INTEGER
      },
      power: {
        allowNull: false,
        defaultValue: 10,
        type: Sequelize.INTEGER
      },
      speed: {
        allowNull: false,
        defaultValue: 10,
        type: Sequelize.INTEGER
      },
      score: {
        allowNull: false,
        defaultValue: 10,
        type: Sequelize.INTEGER
      },
      role: {
        allowNull: false,
        defaultValue: 'mob',
        type: Sequelize.TEXT
      },
      image: {
        allowNull: false,
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Monsters');
  }
};