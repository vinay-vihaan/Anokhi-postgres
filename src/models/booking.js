const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path as necessary

class Booking extends Model {
  static associate(models) {
    Booking.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    Booking.belongsTo(models.Property, {
      foreignKey: 'propertyId'
    });
  }
}

Booking.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  propertyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  booking_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'canceled'),
    defaultValue: 'pending',
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Booking',
  tableName: 'bookings',
  timestamps: false,
});

module.exports = Booking;