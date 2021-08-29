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
        contents: "멋있네요!!",
        userId: 2,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "전체적인 밸런스가 너무 좋네요ㅎㅎ",
        userId: 3,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "장발 분위기 ㄷㄷ",
        userId: 4,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "잘 어울립니다! 이대로 가셔도 될듯",
        userId: 1,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "승마복같은데, 오히려 좋아",
        userId: 2,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "감사합니다!",
        userId: 2,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "올블랙도 좋은데 목도리 그레이색이면 좋을듯",
        userId: 3,
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        contents: "난 올블랙 극호",
        userId: 4,
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "무난 무난 합니다.",
        userId: 1,
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "나는 장발은 불호..",
        userId: 3,
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "느낌 있습니다~^^",
        userId: 5,
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "난 좋은데?",
        userId: 1,
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "셋업 코디 좋네요~",
        userId: 2,
        postId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "이런 후리함 좋아",
        userId: 3,
        postId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "참고 하겠습니다!",
        userId: 4,
        postId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "난 좋은데?",
        userId: 1,
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "조합은 불호지만 샌들은 나름 느낌 있네요",
        userId: 2,
        postId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "샌들 이쁘다",
        userId: 4,
        postId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "굿굿 멋집니다.",
        userId: 1,
        postId: 7,
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
