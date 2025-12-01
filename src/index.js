const app = require('./app');
const { sequelize } = require('./models');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
    .then(() => {
        console.log('Database connected successfully');
        return sequelize.sync();
    })
    .then(() => {
        console.log('Database tables synced');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to database:', error);
        process.exit(1);
    });
