'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Amenities', [
      { name: 'Parking', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gym', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lift', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Swimming Pool', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Garden', createdAt: new Date(), updatedAt: new Date() },
      { name: 'WiFi', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Smart Home', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Solar Panels', createdAt: new Date(), updatedAt: new Date() },
      { name: 'VR Tour', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Eco-Rating', createdAt: new Date(), updatedAt: new Date() },
      { name: 'CCTV Security', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Clubhouse', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Community Hall', createdAt: new Date(), updatedAt: new Date() },
      { name: 'EV Charging Station', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Rainwater Harvesting', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Amenities', null, {});
  }
};