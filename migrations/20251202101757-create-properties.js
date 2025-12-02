'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Properties', {
      property_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      builder_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'builders',
          key: 'builder_id'
        }
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      property_type: {
        type: Sequelize.STRING
      },
      listing_type: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      area: {
        type: Sequelize.INTEGER
      },
      bedrooms: {
        type: Sequelize.INTEGER
      },
      bathrooms: {
        type: Sequelize.INTEGER
      },
      furnishing: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      posted_at: {
        type: Sequelize.DATE
      },
      images: {
        type: Sequelize.JSON
      },
      location: {
        type: Sequelize.JSON
      },
      ai_price_estimate: {
        type: Sequelize.INTEGER
      },
      eco_rating: {
        type: Sequelize.FLOAT
      },
      tags: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Properties');
  }
};