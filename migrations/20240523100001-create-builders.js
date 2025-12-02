'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('builders', {
      builder_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      builder_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      total_properties: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      total_views: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      total_leads: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      active_listings: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('builders');
  }
};
