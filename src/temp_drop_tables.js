
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('anokhi', 'vinay', 'heI6AVY7IZSr0FovqCvXOnHFnlDK5ggC', {
  host: 'dpg-d4kjaj3e5dus73f92s5g-a.oregon-postgres.render.com',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

(async () => {
  try {
    await sequelize.query('DROP TABLE IF EXISTS "listing_amenities", "leads", "listings", "properties", "agents", "users", "amenities", "builders", "locations" CASCADE;');
    console.log('Tables dropped successfully.');
  } catch (error) {
    console.error('Error dropping tables:', error);
  } finally {
    await sequelize.close();
  }
})();
