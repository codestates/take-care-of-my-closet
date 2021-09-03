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
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/%ED%94%84%EB%A1%9C%ED%95%84+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%9C%A0%EC%A0%801.jpg",
        nickname: "데일리룩",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login_id: "sadFlog",
        password: "test2",
        user_image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/%ED%94%84%EB%A1%9C%ED%95%84+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%9C%A0%EC%A0%802.jpg",
        nickname: "슬픈개구릐",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login_id: "hyerx",
        password: "test3",
        user_image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/%ED%94%84%EB%A1%9C%ED%95%84+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%9C%A0%EC%A0%803.jpg",
        nickname: "라니",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login_id: "james7507",
        password: "test4",
        user_image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/%ED%94%84%EB%A1%9C%ED%95%84+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%9C%A0%EC%A0%804.jpg",
        nickname: "산다라밥",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login_id: "devil112",
        password: "test5",
        user_image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/%ED%94%84%EB%A1%9C%ED%95%84+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%9C%A0%EC%A0%805.jpg",
        nickname: "아재사랑",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login_id: "jjub0217",
        password: "test6",
        user_image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/%ED%94%84%EB%A1%9C%ED%95%84+%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%9C%A0%EC%A0%806.jpg",
        nickname: "joo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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
