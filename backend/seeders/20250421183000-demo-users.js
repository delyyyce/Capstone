'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    const passwordHash = await bcrypt.hash('password123', 10);
    const users = [];
    for (let i = 1; i <= 10; i++) {
      users.push({
        email: `user${i}@example.com`,
        name: `User ${i}`,
        passwordHash,
        createdAt: now,
        updatedAt: now,
      });
    }
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
