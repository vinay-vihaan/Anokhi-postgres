
const { sequelize } = require('../src/models');

const dropAllTables = async () => {
    const queryInterface = sequelize.getQueryInterface();
    try {
        console.log('Starting to drop all tables...');

        const tables = [
            'PropertyAmenity',
            'ListingAmenities',
            'transactions',
            'reviews',
            'saved_searches',
            'favorites',
            'leads',
            'Properties',
            'listings',
            'users',
            'Amenities',
            'builders',
            'locations',
            'SequelizeMeta'
        ];

        console.log('Dropping tables in reverse dependency order...');
        for (const table of tables) {
            try {
                console.log(`Dropping table: ${table}`);
                await queryInterface.dropTable(table, { cascade: true });
                console.log(`Successfully dropped table: ${table}`);
            } catch (error) {
                if (error.message.includes('does not exist')) {
                    console.log(`Table ${table} does not exist, skipping.`);
                } else {
                    throw error;
                }
            }
        }

        console.log('All specified tables have been processed.');
        process.exit(0);
    } catch (error) {
        console.error('An error occurred during the table drop process:', error);
        process.exit(1);
    }
};

dropAllTables();
