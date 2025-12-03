
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Amenity extends Model {
  static associate(models) {
    Amenity.belongsToMany(models.Property, {
      through: 'PropertyAmenity',
      foreignKey: 'amenity_id',
      otherKey: 'property_id',
    });
  }
}

Amenity.init({
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
  modelName: 'Amenity',
  tableName: 'amenities',
  timestamps: false,
});

module.exports = Amenity;
