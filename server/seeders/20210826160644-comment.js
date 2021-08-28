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
    return queryInterface.bulkInsert("comments", [
      {
        contents: "귀족 ㄷㄷ",
        userId: 1,
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "칭찬 ㄷㄷㄷ",
        userId: 1,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "게이야..",
        userId: 1,
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "어디서 사셨나요??",
        userId: 2,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "이건 좀...",
        userId: 2,
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "크 멋집니다.",
        userId: 2,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "요즘 유행 스타일!",
        userId: 3,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        contents: "난 스트릿 불호",
        userId: 3,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "잘 어울리세요!",
        userId: 3,
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "난 좋은데?",
        userId: 4,
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  //

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("comments", null, {})
  },
}
