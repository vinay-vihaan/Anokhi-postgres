module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        full_name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '9876543210',
        role: 'buyer',
        password_hash: 'hashed_password_1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        full_name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '9123456780',
        role: 'agent',
        password_hash: 'hashed_password_2',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('Properties', [
      {
        user_id: 1,
        builder_id: 1,
        type_id: 1,
        area_id: 1,
        title: 'Luxury Apartment in Banjara Hills',
        description: 'A beautiful luxury apartment located in the heart of Banjara Hills.',
        listing_type: 'sale',
        price: 15000000,
        area: 2500,
        bedrooms: 3,
        bathrooms: 2,
        status: 'available',
        images: JSON.stringify(['image1.jpg', 'image2.jpg']),
        amenities: JSON.stringify(['Gym', 'Pool', 'Parking']),
        tags: JSON.stringify(['luxury', 'apartment']),
        location: 'Banjara Hills, Hyderabad',
        ai_price_estimate: 14500000,
        eco_rating: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        builder_id: 2,
        type_id: 2,
        area_id: 2,
        title: 'Cozy Villa in Gachibowli',
        description: 'A cozy villa perfect for families located in Gachibowli.',
        listing_type: 'rent',
        price: 50000,
        area: 3000,
        bedrooms: 4,
        bathrooms: 3,
        status: 'available',
        images: JSON.stringify(['villa1.jpg', 'villa2.jpg']),
        amenities: JSON.stringify(['Garden', 'Security']),
        tags: JSON.stringify(['villa', 'family']),
        location: 'Gachibowli, Hyderabad',
        ai_price_estimate: 48000,
        eco_rating: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Properties', null, {});
  },
};