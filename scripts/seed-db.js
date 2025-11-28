const { sequelize } = require('../src/models');
const { User, Property, Agent, Location, Feature, Image, Booking, Transaction, Review } = require('../src/models');

const seedUsers = async () => {
    await User.bulkCreate([
        { full_name: 'John Doe', email: 'john@example.com', phone: '1234567890', role: 'buyer', password_hash: 'hashedpassword1' },
        { full_name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', role: 'agent', password_hash: 'hashedpassword2' },
    ]);
};

const seedProperties = async () => {
    await Property.bulkCreate([
        { user_id: 1, title: 'Luxury Apartment', description: 'A beautiful luxury apartment in the heart of Hyderabad.', price: 10000000, area: 2000, bedrooms: 3, bathrooms: 2, status: 'available' },
        { user_id: 2, title: 'Cozy Villa', description: 'A cozy villa with a garden.', price: 8000000, area: 1500, bedrooms: 4, bathrooms: 3, status: 'available' },
    ]);
};

const seedAgents = async () => {
    await Agent.bulkCreate([
        { name: 'Agent A', user_id: 2 },
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

const seedBookings = async () => {
    await Booking.bulkCreate([
        { user_id: 1, property_id: 1, booking_date: new Date() },
    ]);
};

const seedTransactions = async () => {
    await Transaction.bulkCreate([
        { user_id: 1, amount: 1000000, transaction_date: new Date() },
    ]);
};

const seedReviews = async () => {
    await Review.bulkCreate([
        { property_id: 1, user_id: 1, rating: 5, comment: 'Excellent property!' },
    ]);
};

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedProperties();
    await seedAgents();
    await seedLocations();
    await seedFeatures();
    await seedImages();
    await seedBookings();
    await seedTransactions();
    await seedReviews();
    console.log('Database seeded successfully!');
};

seedDatabase().catch(error => {
    console.error('Error seeding database:', error);
    process.exit(1);
});