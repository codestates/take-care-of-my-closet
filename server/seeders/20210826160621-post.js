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
        image: "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/1630478307674.jpg",
        contents: "길 한복판에서 착샷 찍는건 민망.. 후다닥 찍음",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        title: "소개팅 코디",
        image: "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/1630478307674.jpg",
        contents: "예전에 놀러갈때 룩.. 소개팅 자리에도 괜찮을까요?",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
      {
        title: "작년 겨울 코디 올해도 이륙 가능할까요?",
        image: "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/1630478307674.jpg",
        contents: "가을 준비 다해놔서 이제 겨울을 준비한다.",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
      {
        title: "게이 같나요?",
        image: "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/1630478307674.jpg",
        contents: "어제 전시회 다녀온 착.. 여사친이 게이같다고 놀리네요..",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        title: "오늘의 착샷",
        image: "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/1630478307674.jpg",
        contents: "날씨 선선해지니 가을 코디",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        title: "샌들 샀습니다~",
        image: "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/1630478307674.jpg",
        contents: "반바지에~ 마눌님이 사준 양말~ 가을에도 괜찮죠~?^^",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
      },
      {
        title: "이 조합 괜찮나요??",
        image: "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/1630478307674.jpg",
        contents: "고수님들 평가좀 부탁 드립니다ㅠㅠ",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
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

    await queryInterface.bulkDelete("posts", null, {})
  },
}
