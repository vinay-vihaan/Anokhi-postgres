const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Image extends Model {
  static associate(models) {
    Image.belongsTo(models.Property, {
      foreignKey: 'property_id',
    });
  }
}

Image.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  property_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'properties',
      key: 'id',
    },
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Image',
  tableName: 'images',
  timestamps: false,
});

module.exports = Image;