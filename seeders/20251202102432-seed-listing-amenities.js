'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ListingAmenities', [
      // Amenities for Property 1 (Modern Apartment)
      { property_id: 1, amenity_id: 1, createdAt: new Date(), updatedAt: new Date() }, // Swimming Pool
      { property_id: 1, amenity_id: 2, createdAt: new Date(), updatedAt: new Date() }, // Gymnasium
      { property_id: 1, amenity_id: 5, createdAt: new Date(), updatedAt: new Date() }, // 24/7 Security

      // Amenities for Property 2 (Cozy Cottage)
      { property_id: 2, amenity_id: 3, createdAt: new Date(), updatedAt: new Date() }, // Garden
      { property_id: 2, amenity_id: 4, createdAt: new Date(), updatedAt: new Date() }, // Parking

      // Amenities for Property 3 (Luxury Villa)
      { property_id: 3, amenity_id: 1, createdAt: new Date(), updatedAt: new Date() }, // Swimming Pool
      { property_id: 3, amenity_id: 2, createdAt: new Date(), updatedAt: new Date() }, // Gymnasium
      { property_id: 3, amenity_id: 3, createdAt: new Date(), updatedAt: new Date() }, // Garden
      { property_id: 3, amenity_id: 4, createdAt: new Date(), updatedAt: new Date() }, // Parking
      { property_id: 3, amenity_id: 5, createdAt: new Date(), updatedAt: new Date() }, // 24/7 Security

      // Amenities for Property 4 (Spacious Loft)
      { property_id: 4, amenity_id: 2, createdAt: new Date(), updatedAt: new Date() }, // Gymnasium
      { property_id: 4, amenity_id: 5, createdAt: new Date(), updatedAt: new Date() }, // 24/7 Security

      // Amenities for Property 5 (Suburban Family Home)
      { property_id: 5, amenity_id: 3, createdAt: new Date(), updatedAt: new Date() }, // Garden
      { property_id: 5, amenity_id: 4, createdAt: new Date(), updatedAt: new Date() }  // Parking
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ListingAmenities', null, {});
  }
};