const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: { rejectUnauthorized: false }, // Required for Render
  },
  define: {
    timestamps: false, // your tables won't automatically get created_at/updated_at
  },
});

module.exports = sequelize;

// const { Sequelize } = require('sequelize');
// const config = require('./config');

// const env = process.env.NODE_ENV || 'development';
// const dbConfig = config[env];

// const sequelize = new Sequelize(
//   dbConfig.database,
//   dbConfig.username,
//   dbConfig.password,
//   {
//     host: dbConfig.host,
//     dialect: dbConfig.dialect,
//     define: {
//       timestamps: false,
//     },
//   }
// );

// module.exports = sequelize;
