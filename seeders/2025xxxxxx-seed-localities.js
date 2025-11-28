module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Localities', [
      { name: 'Banjara Hills', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jubilee Hills', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gachibowli', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hitech City', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kondapur', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Madhapur', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Secunderabad', createdAt: new Date(), updatedAt: new Date() },
      { name: 'LB Nagar', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dilsukhnagar', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kukatpally', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nampally', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Shamshabad', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Miyapur', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sainikpuri', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bachupally', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Localities', null, {});
  }
};