'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    await queryInterface.bulkInsert('users', [
      {
        full_name: 'John Doe',
        email: 'john.doe@example.com',
        password_hash: hashedPassword,
        role: 'buyer',
        phone: '1234567890'
      },
      {
        full_name: 'Jane Doe',
        email: 'jane.doe@example.com',
        password_hash: hashedPassword,
        role: 'agent',
        phone: '0987654321'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
