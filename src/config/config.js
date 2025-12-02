module.exports = {
  development: {
    username: 'vinay',
    password: 'heI6AVY7IZSr0FovqCvXOnHFnlDK5ggC',
    database: 'anokhi',
    host: 'dpg-d4kjaj3e5dus73f92s5g-a.oregon-postgres.render.com',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  test: {
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'Vihaan@#2355',
    database: process.env.DB_NAME || 'anokhi',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  },
  production: {
    username: 'vinay',
    password: 'heI6AVY7IZSr0FovqCvXOnHFnlDK5ggC',
    database: 'anokhi',
    host: 'dpg-d4kjaj3e5dus73f92s5g-a.oregon-postgres.render.com',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
};