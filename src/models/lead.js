const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Lead extends Model {
  static associate(models) {
    Lead.belongsTo(models.Property, {
      foreignKey: 'property_id',
    });
    Lead.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
    Lead.belongsTo(models.Builder, {
      foreignKey: 'builder_id',
    });
  }
}

Lead.init({
  lead_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  property_id: { type: DataTypes.INTEGER, allowNull: false },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  agent_id: { type: DataTypes.INTEGER, allowNull: true },
  message: { type: DataTypes.TEXT, allowNull: true },
  status: { type: DataTypes.ENUM('pending', 'contacted', 'closed'), allowNull: false, defaultValue: 'pending' },
  created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
}, {
  sequelize,
  modelName: 'Lead',
  tableName: 'leads',
  timestamps: false,
});

module.exports = Lead;