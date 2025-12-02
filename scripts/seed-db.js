const { sequelize } = require('../src/models');
const { User, Property, Location, Feature, Image } = require('../src/models');

const seedUsers = async () => {
    await User.bulkCreate([
        { full_name: 'John Doe', email: 'john@example.com', phone: '1234567890', role: 'buyer', password_hash: 'hashedpassword1' },
        { full_name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', role: 'agent', password_hash: 'hashedpassword2' },
    ]);
};

const seedProperties = async () => {
    await Property.bulkCreate([
        { user_id: 1, title: 'Luxury Apartment', description: 'A beautiful luxury apartment in the heart of Hyderabad.', listing_type: 'sale', price: 10000000, area: 2000, bedrooms: 3, bathrooms: 2, status: 'available' },
        { user_id: 2, title: 'Cozy Villa', description: 'A cozy villa with a garden.', listing_type: 'sale', price: 8000000, area: 1500, bedrooms: 4, bathrooms: 3, status: 'available' },
    ]);
};

const seedLocations = async () => {
    await Location.bulkCreate([
        { name: 'Banjara Hills', type: 'locality' },
        { name: 'Jubilee Hills', type: 'locality' },
    ]);
};

const seedFeatures = async () => {
    await Feature.bulkCreate([
        { name: 'Swimming Pool' },
        { name: 'Gym' },
    ]);
};

const seedImages = async () => {
    await Image.bulkCreate([
        { property_id: 1, url: 'http://example.com/image1.jpg' },
        { property_id: 2, url: 'http://example.com/image2.jpg' },
    ]);
};

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedProperties();
    await seedLocations();
    await seedFeatures();
    await seedImages();
    console.log('Database seeded successfully!');
};

seedDatabase().catch(error => {
    console.error('Error seeding database:', error);
    process.exit(1);
});