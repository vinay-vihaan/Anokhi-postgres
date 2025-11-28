const { Sequelize } = require('sequelize');
const config = require('../src/config/config');

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host,
    dialect: 'postgres',
});

const initDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        // Sync all models
        await sequelize.sync({ force: true });
        console.log('Database synchronized successfully.');

        // You can add seed data here if needed

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        await sequelize.close();
    }
};

initDb();