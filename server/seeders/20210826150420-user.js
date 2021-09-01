"use strict";

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
        user_image:
          "https://user-images.githubusercontent.com/83861190/131655200-a045b413-30d7-40f2-9f01-72298943673a.jpg",
        nickname: "데일리룩",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login_id: "sadFlog",
        password: "test2",
        user_image:
          "https://user-images.githubusercontent.com/83861190/131655258-25c0da23-3b42-4894-8110-4f3982a61512.jpg",
        nickname: "슬픈개구릐",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login_id: "hyerx",
        password: "test3",
        user_image:
          "https://user-images.githubusercontent.com/83861190/131655241-147d48f1-51fc-4bc7-96f4-4645549b37af.jpg",
        nickname: "라니",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login_id: "james7507",
        password: "test4",
        user_image:
          "https://user-images.githubusercontent.com/83861190/131655251-f223bb51-b17c-4666-b167-c6b18906638e.jpg",
        nickname: "산다라밥",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login_id: "devil112",
        password: "test5",
        user_image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/1630478307674.jpg",
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

    await queryInterface.bulkDelete("users", null, {});
  },
};
