const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class PropertyType extends Model {
  static associate(models) {
    PropertyType.hasMany(models.Property, {
      foreignKey: 'property_type',
      sourceKey: 'name'
    });
  }
}

PropertyType.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  sequelize,
  modelName: 'PropertyType',
  tableName: 'property_types',
  timestamps: false,
});

module.exports = PropertyType;