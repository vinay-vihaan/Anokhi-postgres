
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class SavedSearch extends Model {
  static associate(models) {
    SavedSearch.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
  }
}

SavedSearch.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  search_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  search_parameters: {
    type: DataTypes.JSON,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'SavedSearch',
  tableName: 'saved_searches',
  timestamps: true,
  underscored: true,
});

module.exports = SavedSearch;
