
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('properties', {
      property_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      builder_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'builders',
          key: 'builder_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      property_type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      listing_type: {
        type: Sequelize.ENUM('rent', 'sale'),
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      area: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      bedrooms: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      bathrooms: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      furnishing: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'active'
      },
      posted_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      images: {
        type: Sequelize.JSON,
        allowNull: true
      },
      location: {
        type: Sequelize.JSON,
        allowNull: true
      },
      amenities: {
        type: Sequelize.JSON,
        allowNull: true
      },
      ai_price_estimate: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
      },
      eco_rating: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      tags: {
        type: Sequelize.JSON,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('properties');
  }
};
