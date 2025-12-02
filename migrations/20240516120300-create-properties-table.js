'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('properties', {
      property_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      builder_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'builders',
          key: 'builder_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      views: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      leads: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('properties');
  }
};