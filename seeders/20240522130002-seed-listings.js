'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('listings', [
      {
        property_id: 101,
        builder_id: 1,
        title: "Luxury Villa with a View",
        description: "A beautiful villa with a stunning view of the city. Comes with all the modern amenities.",
        price: 12000000,
        status: "active",
        listing_type: "sale",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        property_id: 102,
        builder_id: 2,
        title: "Modern Apartment in the City Center",
        description: "A modern apartment located in the heart of the city. Perfect for those who want to be close to the action.",
        price: 28000000,
        status: "active",
        listing_type: "sale",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        property_id: 101,
        builder_id: 3,
        title: "Cozy Cottage in the Suburbs",
        description: "A cozy cottage located in a quiet suburb. Perfect for those who want to escape the hustle and bustle of the city.",
        price: 8500000,
        status: "inactive",
        listing_type: "sale",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        property_id: 102,
        builder_id: 1,
        title: "Spacious Loft with a Rooftop Terrace",
        description: "A spacious loft with a private rooftop terrace. Perfect for entertaining guests.",
        price: 15000000,
        status: "active",
        listing_type: "sale",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        property_id: 101,
        builder_id: 2,
        title: "Charming Bungalow with a Garden",
        description: "A charming bungalow with a beautiful garden. Perfect for those who love to spend time outdoors.",
        price: 23000000,
        status: "active",
        listing_type: "sale",
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('listings', null, {});
  }
};