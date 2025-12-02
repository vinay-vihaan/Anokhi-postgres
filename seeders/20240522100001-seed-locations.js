'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('locations', [
      {
        country: 'India',
        state: 'Telangana',
        city: 'Hyderabad',
        area: 'Banjara Hills',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        country: 'India',
        state: 'Telangana',
        city: 'Hyderabad',
        area: 'Jubilee Hills',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('locations', null, {});
  },
};
