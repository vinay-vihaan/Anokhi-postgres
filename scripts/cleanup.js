
const { sequelize } = require('../src/models');

const cleanup = async () => {
    try {
        console.log('Dropping all tables...');
        await sequelize.drop();
        console.log('All tables dropped successfully.');
        console.log('Cleanup complete!');
        process.exit(0);
    } catch (error) {
        console.error('Error during cleanup:', error);
        process.exit(1);
    }
};

cleanup();
