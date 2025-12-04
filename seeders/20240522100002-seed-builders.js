'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('builders', [
      {
        builder_id: 1,
        builder_name: 'Skyline Developers',
        total_properties: 2,
        total_views: 2350,
        total_leads: 85,
        active_listings: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        builder_id: 2,
        builder_name: 'Green Valley Constructions',
        total_properties: 2,
        total_views: 1880,
        total_leads: 60,
        active_listings: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        builder_id: 3,
        builder_name: 'Urban Heights Builders',
        total_properties: 1,
        total_views: 560,
        total_leads: 18,
        active_listings: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('builders', null, {});
  }
};