const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Property extends Model {
  static associate(models) {
    Property.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
    Property.belongsToMany(models.Amenity, {
      through: 'PropertyAmenity',
      foreignKey: 'property_id',
      otherKey: 'amenity_id',
    });
  }
}

Property.init({
  property_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  property_type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  listing_type: {
    type: DataTypes.ENUM('rent', 'sale'),
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  area: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  bedrooms: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  bathrooms: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  furnishing: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'active'
  },
  posted_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  images: {
    type: DataTypes.JSON,
    allowNull: true
  },
  location: {
    type: DataTypes.JSON,
    allowNull: true
  },
  amenities: {
    type: DataTypes.JSON,
    allowNull: true
  },
  ai_price_estimate: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  eco_rating: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  tags: {
    type: DataTypes.JSON,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Property',
  tableName: 'properties',
  timestamps: true,
  underscored: true,
});

module.exports = Property;