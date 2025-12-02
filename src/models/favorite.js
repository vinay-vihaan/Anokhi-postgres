const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Favorite extends Model {
  static associate(models) {
    Favorite.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
    Favorite.belongsTo(models.Property, {
      foreignKey: 'property_id',
    });
  }
}

Favorite.init({
  fav_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  property_id: { type: DataTypes.INTEGER, allowNull: false },
}, {
  sequelize,
  modelName: 'Favorite',
  tableName: 'favorites',
  timestamps: false,
});

module.exports = Favorite;