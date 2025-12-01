const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Property extends Model {
  static associate(models) {
    Property.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
    Property.hasMany(models.Image, {
      foreignKey: 'property_id'
    });
    Property.hasMany(models.Booking, {
      foreignKey: 'propertyId'
    });
  }
}

Property.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    builder_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    area_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    listing_type: {
        type: DataTypes.ENUM('sale', 'rent'),
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    area: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    bedrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    bathrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('available', 'sold', 'rented'),
        allowNull: false,
    },
    images: {
        type: DataTypes.JSONB,
        allowNull: true,
    },
    amenities: {
        type: DataTypes.JSONB,
        allowNull: true,
    },
    tags: {
        type: DataTypes.JSONB,
        allowNull: true,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ai_price_estimate: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    eco_rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: 'Property',
    tableName: 'properties',
    timestamps: true,
    underscored: true,
});

module.exports = Property;