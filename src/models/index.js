const User = require('./user');
const Property = require('./property');
const Image = require('./image');
const Agent = require('./agent');
const sequelize = require('../config/database');

// Associations
User.hasMany(Property, { foreignKey: 'user_id' });
Property.belongsTo(User, { foreignKey: 'user_id' });
Property.hasMany(Image, { foreignKey: 'property_id' });
Image.belongsTo(Property, { foreignKey: 'property_id' });

module.exports = { sequelize, User, Property, Image, Agent };



// const sequelize = require('../config/database');
// const User = require('./user');
// const Image = require('./image');
// // Import other models here as you create them
// const Property = require('./property');
// const Agent = require('./agent');

// // Define associations here (uncomment when all models are created)
// // User.hasMany(Property, { foreignKey: 'user_id' });
// // Property.belongsTo(User, { foreignKey: 'user_id' });
// // Property.hasMany(Image, { foreignKey: 'property_id' });
// // Image.belongsTo(Property, { foreignKey: 'property_id' });

// module.exports = {
//   sequelize,
//   User,
//   Image,
//   // Export other models here
//   Property,
//   Agent,
// };
