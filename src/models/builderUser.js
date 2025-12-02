const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class BuilderUser extends Model {}

BuilderUser.init({
  user_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  role: { type: DataTypes.ENUM('buyer', 'seller', 'agent'), allowNull: false },
  status: { type: DataTypes.ENUM('active', 'pending', 'inactive'), allowNull: false, defaultValue: 'pending' },
}, {
  sequelize,
  modelName: 'BuilderUser',
  tableName: 'builder_users',
  timestamps: false,
});

module.exports = BuilderUser;