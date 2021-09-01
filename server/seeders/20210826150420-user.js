"use strict"

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

    return queryInterface.bulkInsert("users", [
      {
        login_id: "dailyLook123",
        password: "test1",
        user_image: "image1",
        nickname: "데일리룩",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login_id: "sadFlog",
        password: "test2",
        user_image: "image2",
        nickname: "슬픈개구릐",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login_id: "hyerx",
        password: "test3",
        user_image: "image3",
        nickname: "라니",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login_id: "james7507",
        password: "test4",
        user_image: "image4",
        nickname: "산다라밥",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login_id: "devil112",
        password: "test5",
        user_image: "image4",
        nickname: "아재사랑",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login_id: "jjub0217",
        password: "test6",
        user_image: "image5",
        nickname: "joo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("users", null, {})
  },
}
