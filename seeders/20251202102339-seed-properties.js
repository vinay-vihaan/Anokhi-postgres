'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Properties', [
      {
        property_id: 1,
        builder_id: 1,
        title: 'Modern Apartment in Downtown',
        description: 'A stunning modern apartment located in the heart of the city, offering breathtaking views and state-of-the-art amenities.',
        property_type: 'Apartment',
        listing_type: 'For Sale',
        price: 500000,
        area: 1200,
        bedrooms: 2,
        bathrooms: 2,
        furnishing: 'Furnished',
        status: 'Available',
        posted_at: new Date(),
        images: JSON.stringify([
          { url: 'https://example.com/image1.jpg', description: 'Living Room' },
          { url: 'https://example.com/image2.jpg', description: 'Bedroom' }
        ]),
        location: JSON.stringify({
          latitude: 34.052235,
          longitude: -118.243683,
          address: '123 Main St, Los Angeles, CA'
        }),
        ai_price_estimate: 520000,
        eco_rating: 4.5,
        tags: JSON.stringify(['modern', 'downtown', 'luxury']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        property_id: 2,
        builder_id: 2,
        title: 'Cozy Cottage in the Suburbs',
        description: 'A charming cottage with a beautiful garden, perfect for a small family looking for a quiet and peaceful neighborhood.',
        property_type: 'Cottage',
        listing_type: 'For Rent',
        price: 2500,
        area: 800,
        bedrooms: 1,
        bathrooms: 1,
        furnishing: 'Semi-Furnished',
        status: 'Available',
        posted_at: new Date(),
        images: JSON.stringify([
          { url: 'https://example.com/image3.jpg', description: 'Exterior' },
          { url: 'https://example.com/image4.jpg', description: 'Garden' }
        ]),
        location: JSON.stringify({
          latitude: 34.152235,
          longitude: -118.343683,
          address: '456 Oak Ave, Burbank, CA'
        }),
        ai_price_estimate: 2600,
        eco_rating: 4.2,
        tags: JSON.stringify(['cozy', 'suburbs', 'family-friendly']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        property_id: 3,
        builder_id: 3,
        title: 'Luxury Villa with Ocean View',
        description: 'An exquisite villa offering panoramic ocean views, a private pool, and luxurious amenities for an unparalleled living experience.',
        property_type: 'Villa',
        listing_type: 'For Sale',
        price: 2500000,
        area: 3500,
        bedrooms: 5,
        bathrooms: 5,
        furnishing: 'Unfurnished',
        status: 'Available',
        posted_at: new Date(),
        images: JSON.stringify([
          { url: 'https://example.com/image5.jpg', description: 'Pool Area' },
          { url: 'https://example.com/image6.jpg', description: 'Master Bedroom' }
        ]),
        location: JSON.stringify({
          latitude: 33.952235,
          longitude: -118.443683,
          address: '789 Ocean Dr, Malibu, CA'
        }),
        ai_price_estimate: 2600000,
        eco_rating: 4.8,
        tags: JSON.stringify(['luxury', 'ocean-view', 'private-pool']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        property_id: 4,
        builder_id: 1,
        title: 'Spacious Loft in Arts District',
        description: 'A stylish and spacious loft in the vibrant Arts District, featuring high ceilings, large windows, and an open-plan living area.',
        property_type: 'Loft',
        listing_type: 'For Rent',
        price: 3500,
        area: 1500,
        bedrooms: 1,
        bathrooms: 2,
        furnishing: 'Furnished',
        status: 'Rented',
        posted_at: new Date(),
        images: JSON.stringify([
          { url: 'https://example.com/image7.jpg', description: 'Living Area' },
          { url: 'https://example.com/image8.jpg', description: 'Kitchen' }
        ]),
        location: JSON.stringify({
          latitude: 34.042235,
          longitude: -118.233683,
          address: '101 Art St, Los Angeles, CA'
        }),
        ai_price_estimate: 3600,
        eco_rating: 4.3,
        tags: JSON.stringify(['spacious', 'arts-district', 'stylish']),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        property_id: 5,
        builder_id: 2,
        title: 'Suburban Family Home',
        description: 'A beautiful family home in a quiet suburban neighborhood, featuring a large backyard, a modern kitchen, and spacious bedrooms.',
        property_type: 'House',
        listing_type: 'For Sale',
        price: 750000,
        area: 2200,
        bedrooms: 4,
        bathrooms: 3,
        furnishing: 'Semi-Furnished',
        status: 'Available',
        posted_at: new Date(),
        images: JSON.stringify([
          { url: 'https://example.com/image9.jpg', description: 'Backyard' },
          { url: 'https://example.com/image10.jpg', description: 'Kitchen' }
        ]),
        location: JSON.stringify({
          latitude: 34.252235,
          longitude: -118.443683,
          address: '212 Maple St, Glendale, CA'
        }),
        ai_price_estimate: 780000,
        eco_rating: 4.6,
        tags: JSON.stringify(['family-home', 'suburban', 'spacious']),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Properties', null, {});
  }
};
