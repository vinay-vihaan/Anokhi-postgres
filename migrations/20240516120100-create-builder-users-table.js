'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('builder_users', {
      user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      role: {
        type: Sequelize.ENUM('buyer', 'seller', 'agent'),
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('active', 'pending', 'inactive'),
        allowNull: false,
        defaultValue: 'pending',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('builder_users');
  }
};