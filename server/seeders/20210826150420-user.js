'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('users', [
      {
        login_id: 'kimcoding1',
        password: '1234',
        user_image: 'image1',
        nickname: 'test1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login_id: 'kimcoding2',
        password: '1234',
        user_image: 'image2',
        nickname: 'test2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login_id: 'kimcoding3',
        password: '1234',
        user_image: 'image3',
        nickname: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login_id: 'kimcoding4',
        password: '1234',
        user_image: 'image4',
        nickname: 'test4',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
