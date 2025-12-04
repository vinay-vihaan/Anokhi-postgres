'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('properties', [
      {
        property_id: 101,
        builder_id: 1,
        title: "1BHK Villa in Kondapur",
        description: "Modern villa with futuristic amenities and VR tour.",
        property_type: "Villa",
        listing_type: "rent",
        price: 8619209,
        area: 1777,
        bedrooms: 1,
        bathrooms: 1,
        furnishing: "Semi-Furnished",
        status: "active",
        posted_at: new Date("2025-11-06T00:00:00Z"),
        images: JSON.stringify([
          "https://picsum.photos/400/300/?construction,building&sig=1",
          "https://picsum.photos/400/300/?construction,building&sig=2"
        ]),
        location: JSON.stringify({
          "city": "Hyderabad",
          "state": "Telangana",
          "country": "India",
          "latitude": 18.5204,
          "longitude": 73.8567,
          "address": "Kondapur"
        }),
        amenities: JSON.stringify([
          "Eco-Rating",
          "Gym",
          "EV Charging Station"
        ]),
        ai_price_estimate: 8791593,
        eco_rating: 8.2,
        tags: JSON.stringify(["Featured"]),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        property_id: 102,
        builder_id: 2,
        title: "0BHK Commercial in Kondapur",
        description: "Modern commercial with futuristic amenities and VR tour.",
        property_type: "Commercial",
        listing_type: "rent",
        price: 5278451,
        area: 2315,
        bedrooms: 0,
        bathrooms: 2,
        furnishing: "Unfurnished",
        status: "active",
        posted_at: new Date("2025-11-18T00:00:00Z"),
        images: JSON.stringify([
          "https://picsum.photos/400/300/?construction,building&sig=3",
          "https://picsum.photos/400/300/?construction,building&sig=4"
        ]),
        location: JSON.stringify({
          "city": "Hyderabad",
          "state": "Telangana",
          "country": "India",
          "latitude": 18.5204,
          "longitude": 73.8567,
          "address": "Kondapur Main Street"
        }),
        amenities: JSON.stringify([
          "Eco-Rating",
          "Rainwater Harvesting",
          "Solar Panels",
          "Community Hall",
          "EV Charging Station",
          "WiFi"
        ]),
        ai_price_estimate: 5384020,
        eco_rating: 9.2,
        tags: JSON.stringify(["Featured"]),
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('properties', null, {});
  }
};