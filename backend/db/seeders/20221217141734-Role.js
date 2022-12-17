'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'Monster',
        description: 'Fire',
        image: 'https://static.wikia.nocookie.net/the-messenger-2018/images/7/7d/Leaf_Monster.png/revision/latest?cb=20190126214215',
        speed: 1,
        health: 1,
        power: 1,
        characterId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Straschila',
        description: 'World',
        image: 'https://www.pngall.com/wp-content/uploads/5/Cute-Monster-PNG-Picture.png',
        speed: 1,
        health: 1,
        power: 1,
        characterId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
  
  }
};
