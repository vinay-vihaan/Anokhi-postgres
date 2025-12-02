'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Leads', [
      {
        property_id: 1,
        user_id: 1,
        status: 'interested',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        property_id: 2,
        user_id: 2,
        status: 'contacted',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        property_id: 3,
        user_id: 3,
        status: 'not-interested',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        property_id: 4,
        user_id: 4,
        status: 'interested',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        property_id: 5,
        user_id: 5,
        status: 'contacted',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Leads', null, {});
  }
};