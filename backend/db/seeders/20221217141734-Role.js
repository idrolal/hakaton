'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'Strashila',
        description: 'Fire',
        image: 'client/src/images/Strashila.png',
        speed: 1,
        health: 1,
        power: 2,
        characterId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Urodec',
        description: 'World',
        image: 'client/src/images/urodec.png',
        speed: 2,
        health: 3,
        power: 1,
        characterId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Takoi Sebe',
        description: 'World',
        image: 'client/src/images/Takoe Sebe.png',
        speed: 4,
        health: 1,
        power: 3,
        characterId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
  
  }
};
