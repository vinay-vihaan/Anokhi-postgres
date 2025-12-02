const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Property extends Model {
  static associate(models) {
    Property.belongsTo(models.Builder, {
      foreignKey: 'builder_id',
    });
  }
}

Property.init({
  property_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  builder_id: { type: DataTypes.INTEGER, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false },
  views: { type: DataTypes.INTEGER, defaultValue: 0 },
  leads: { type: DataTypes.INTEGER, defaultValue: 0 },
}, {
  sequelize,
  modelName: 'Property',
  tableName: 'properties',
  timestamps: false,
});

module.exports = Property;