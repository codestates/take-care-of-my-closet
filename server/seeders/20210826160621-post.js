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
    return queryInterface.bulkInsert("posts", [
      {
        title: "스트릿 코디입니다.",
        image: "image1",
        contents: "괜찮은가요?",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        title: "쇼핑했는데 어떰?",
        image: "image2",
        contents: "세일하길래 삼",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        title: "승마복 아님",
        image: "image3",
        contents: "ㅈㄱㄴ",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        title: "게이 아님",
        image: "image4",
        contents: "ㅈㄱㄴ",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
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
  },
}
