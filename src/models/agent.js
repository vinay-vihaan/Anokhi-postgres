const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // adjust path if needed

class Agent extends Model {}

Agent.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users', // make sure table name matches User table
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Agent',
  tableName: 'agents',
  timestamps: false,
});

module.exports = Agent;
