
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        user_id: 1,
        full_name: 'Rahul Sharma',
        email: 'rahul@example.com',
        phone: '9876543210',
        role: 'buyer',
        password_hash: 'password'
      },
      {
        user_id: 2,
        full_name: 'Anita Verma',
        email: 'anita@example.com',
        phone: '9123456780',
        role: 'seller',
        password_hash: 'password'
      },
      {
        user_id: 3,
        full_name: 'Deepak Singh',
        email: 'deepak.agent@example.com',
        phone: '9988776655',
        role: 'agent',
        password_hash: 'password'
      },
      {
        user_id: 4,
        full_name: 'Admin User',
        email: 'admin@example.com',
        role: 'admin',
        phone: '0000000000',
        password_hash: 'password'
      },
      {
        user_id: 5,
        full_name: 'Priya Kapoor',
        email: 'priya.buyer@example.com',
        phone: '9871234560',
        role: 'buyer',
        password_hash: 'password'
      },
      {
        user_id: 6,
        full_name: 'Amit Mehra',
        email: 'amit.agent@example.com',
        phone: '9955667788',
        role: 'agent',
        password_hash: 'password'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
