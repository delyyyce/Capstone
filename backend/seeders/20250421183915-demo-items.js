'use strict';
module.exports = {
  up: async (qi) => {
    const now = new Date();
    const items = [];
    for (let i = 1; i <= 50; i++) {
      items.push({
        name: `Demo Item ${i}`,
        description: `Description for item ${i}`,
        avgRating: Math.round(Math.random() * 50) / 10,
        createdAt: now,
        updatedAt: now,
      });
    }
    return qi.bulkInsert('Items', items, {});
  },
  down: (qi) => qi.bulkDelete('Items', null, {}),
};
