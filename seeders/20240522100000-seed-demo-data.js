const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('password123', 10);
    await queryInterface.bulkInsert('Users', [
      {
        "full_name": "Rahul Sharma",
        "email": "rahul@example.com",
        "phone": "9876543210",
        "role": "buyer",
        "password_hash": hashedPassword
      },
      {
        "full_name": "Anita Verma",
        "email": "anita@example.com",
        "phone": "9123456780",
        "role": "seller",
        "password_hash": hashedPassword
      },
      {
        "full_name": "Deepak Singh",
        "email": "deepak.agent@example.com",
        "phone": "9988776655",
        "role": "agent",
        "password_hash": hashedPassword
      },
      {
        "full_name": "Admin User",
        "email": "admin@example.com",
        "role": "admin",
        "password_hash": hashedPassword
      },
      {
        "full_name": "Priya Kapoor",
        "email": "priya.buyer@example.com",
        "phone": "9871234560",
        "role": "buyer",
        "password_hash": hashedPassword
      },
      {
        "full_name": "Amit Mehra",
        "email": "amit.agent@example.com",
        "phone": "9955667788",
        "role": "agent",
        "password_hash": hashedPassword
      }
    ]);

    await queryInterface.bulkInsert('PropertyTypes', [
      {
        "name": "Flat"
      },
      {
        "name": "Villa"
      },
      {
        "name": "Plot"
      },
      {
        "name": "Commercial"
      }
    ]);

    await queryInterface.bulkInsert('Properties', [
      {
        user_id: 1,
        type_id: 2,
        title: '1BHK Villa in Kondapur',
        description: 'Modern villa with futuristic amenities and VR tour.',
        property_type: 'Villa',
        listing_type: 'rent',
        price: 8619209,
        area: 1777,
        bedrooms: 1,
        bathrooms: 1,
        furnishing: 'Semi-Furnished',
        status: 'active',
        posted_at: new Date('2025-11-06T00:00:00Z'),
        images: JSON.stringify([
          "https://picsum.photos/400/300/?construction,building&sig=1",
          "https://picsum.photos/400/300/?construction,building&sig=2"
        ]),
        location: JSON.stringify({
          city: "Hyderabad",
          state: "Telangana",
          country: "India",
          latitude: 18.5204,
          longitude: 73.8567,
          address: "Kondapur"
        }),
        amenities: JSON.stringify([
          "Eco-Rating",
          "Gym",
          "EV Charging Station"
        ]),
        ai_price_estimate: 8791593,
        eco_rating: 8.2,
        tags: JSON.stringify(["Featured"])
      },
      {
        user_id: 2,
        type_id: 2,
        title: 'Cozy Villa in Gachibowli',
        description: 'A cozy villa perfect for families located in Gachibowli.',
        property_type: 'Villa',
        listing_type: 'rent',
        price: 50000,
        area: 3000,
        bedrooms: 4,
        bathrooms: 3,
        furnishing: 'Furnished',
        status: 'active',
        posted_at: new Date(),
        images: JSON.stringify(['villa1.jpg', 'villa2.jpg']),
        location: JSON.stringify({
          city: "Hyderabad",
          state: "Telangana",
          country: "India",
          latitude: 17.4483,
          longitude: 78.3915,
          address: "Gachibowli"
        }),
        amenities: JSON.stringify(['Garden', 'Security']),
        ai_price_estimate: 48000,
        eco_rating: 5,
        tags: JSON.stringify(['villa', 'family'])
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('PropertyTypes', null, {});
    await queryInterface.bulkDelete('Properties', null, {});
  },
};