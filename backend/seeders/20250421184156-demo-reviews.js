'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        userId: 5,    // Alice's ID
        itemId: 13,   // Smartphone's itemId
        rating: 5,
        body: 'Great product, highly recommend!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,    // Bob's ID
        itemId: 14,   // Washing Machine's itemId
        rating: 4,
        body: 'Good value for money.',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
