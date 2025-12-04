'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('password123', 10);
    await queryInterface.bulkInsert('users', [
      {
        full_name: 'Rahul Sharma',
        email: 'rahul@example.com',
        phone: '9876543210',
        role: 'buyer',
        password_hash: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        full_name: 'Anita Verma',
        email: 'anita@example.com',
        phone: '9123456780',
        role: 'seller',
        password_hash: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        full_name: 'Deepak Singh',
        email: 'deepak.agent@example.com',
        phone: '9988776655',
        role: 'agent',
        password_hash: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        full_name: 'Admin User',
        email: 'admin@example.com',
        phone: null,
        role: 'admin',
        password_hash: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        full_name: 'Priya Kapoor',
        email: 'priya.buyer@example.com',
        phone: '9871234560',
        role: 'buyer',
        password_hash: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        full_name: 'Amit Mehra',
        email: 'amit.agent@example.com',
        phone: '9955667788',
        role: 'agent',
        password_hash: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};