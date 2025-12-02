const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Builder extends Model {
  static associate(models) {
    Builder.hasMany(models.Property, {
      foreignKey: 'builder_id',
    });
  }
}

Builder.init({
  builder_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  builder_name: { type: DataTypes.STRING, allowNull: false },
  total_properties: { type: DataTypes.INTEGER, defaultValue: 0 },
  total_views: { type: DataTypes.INTEGER, defaultValue: 0 },
  total_leads: { type: DataTypes.INTEGER, defaultValue: 0 },
  active_listings: { type: DataTypes.INTEGER, defaultValue: 0 },
}, {
  sequelize,
  modelName: 'Builder',
  tableName: 'builders',
  timestamps: false,
});

module.exports = Builder;