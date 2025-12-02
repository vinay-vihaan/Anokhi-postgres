const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {
  static associate(models) {
    // associations can be defined here
    User.hasMany(models.Property, {
      foreignKey: 'user_id',
    });
    User.hasMany(models.Booking, {
      foreignKey: 'user_id'
    });
  }
}

User.init({
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.ENUM('buyer', 'seller', 'agent', 'admin'),
    defaultValue: 'buyer',
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: false,
});

module.exports = User;