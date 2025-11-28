module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'Vihaan@#2355',
    database: process.env.DB_NAME || 'anokhi',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'Vihaan@#2355',
    database: process.env.DB_NAME || 'anokhi',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'Vihaan@#2355',
    database: process.env.DB_NAME || 'anokhi',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  },
};