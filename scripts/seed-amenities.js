
const { Amenity } = require('../src/models');
const sequelize = require('../src/config/database');

const seedAmenities = async () => {
    try {
        await sequelize.sync();
        const amenities = [
            "Parking", "Gym", "Lift", "Swimming Pool", "Garden", "WiFi", "Smart Home", 
            "Solar Panels", "VR Tour", "Eco-Rating", "CCTV Security", "Clubhouse", 
            "Community Hall", "EV Charging Station", "Rainwater Harvesting"
        ];
        const amenityData = amenities.map(name => ({ name }));
        await Amenity.bulkCreate(amenityData, { ignoreDuplicates: true });
        console.log('Amenities seeded successfully!');
    } catch (error) {
        console.error('Error seeding amenities:', error);
    } finally {
        await sequelize.close();
    }
};

seedAmenities();
