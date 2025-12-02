'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('listings', [
      {
        property_id: 201,
        builder_id: 1,
        title: 'Skyline Residency',
        location: 'Gachibowli',
        price: 12000000,
        status: 'Active',
        views: 1250,
        leads: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        property_id: 202,
        builder_id: 2,
        title: 'Green Valley Villas',
        location: 'Kokapet',
        price: 28000000,
        status: 'Active',
        views: 980,
        leads: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        property_id: 203,
        builder_id: 3,
        title: 'Urban Heights',
        location: 'Madhapur',
        price: 8500000,
        status: 'Pending',
        views: 560,
        leads: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        property_id: 204,
        builder_id: 1,
        title: 'Skyline Apartments',
        location: 'Hitech City',
        price: 15000000,
        status: 'Active',
        views: 1100,
        leads: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        property_id: 205,
        builder_id: 2,
        title: 'Green Valley Greens',
        location: 'Kondapur',
        price: 23000000,
        status: 'Active',
        views: 900,
        leads: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('listings', null, {});
  }
};