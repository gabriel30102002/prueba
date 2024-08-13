'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('propietarios', [
      { nombre: 'John', apellido: 'Doe', estado: 'Activo', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Jane', apellido: 'Smith', estado: 'Activo', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Mike', apellido: 'Johnson', estado: 'Activo', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Emily', apellido: 'Davis', estado: 'Activo', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'David', apellido: 'Brown', estado: 'Activo', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Propietarios', null, {});
  }
};
