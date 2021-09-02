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
        title: "작년 가을 코디입니다.",
        image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/1.jpg",
        contents: "빨리 가을이 왔으면 좋겠어요~",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 6,
      },
      {
        title: "샌들 샀습니다~",
        image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/2.jpg",
        contents: "반바지에~ 마눌님이 사준 양말~ 가을에도 괜찮죠~?^^",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5,
      },
      {
        title: "작년 겨울 코디 올해도 이륙 가능할까요?",
        image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/3.png",
        contents: "가을 준비 다 해놔서 이제 겨울 준비한다.",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        title: "이 조합 괜찮나요??",
        image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/4.jpg",
        contents: "평가좀 부탁 드립니다ㅠㅠ",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
      },
      {
        title: "흑청 자켓 샀습니다",
        image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/5.jpeg",
        contents: "이번에 핫딜로 건졌음ㅎㅎ 흑청 셋트 어떤가요?",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        title: "스트릿 코디입니다",
        image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/6.jpg",
        contents: "처음으로 게시물 올려보네요",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        title: "밤마다 이렇게 입고 산책하는데",
        image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/7.jpeg",
        contents: "아직은 좀 더운듯ㅋㅋㅋ",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        title: "요즘 많이 선선하던데",
        image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/8.jpg",
        contents: "봄에 입었던 코디 아직은 많이 더우려나요?",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
      {
        title: "착샷을 위해 카메라 바꿨습니다.",
        image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/9.jpg",
        contents: "앞으로 더 질 좋은 착샷 올리겠습니다^^",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        title: "작년 할로윈",
        image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/10.jpg",
        contents:
          "할로윈 분장에 맞춰 코디했을때 재밌었는데.. 얼른 코로나 종식 되길",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
      },
      {
<<<<<<< HEAD
        title: "다가오는 가을은..",
        image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/11.jpg",
        contents: "후드집업에 스웻팬츠 셋업으로 코디 해보세요",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        title: "소개팅 코디",
        image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/12.jpg",
        contents: "예전 코디인데.. 소개팅 자리에 괜찮을까요?",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
      {
        title: "장발머리 어때요??",
        image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/13.jpeg",
        contents: "여사친이 게이냐고 놀리네요..",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        title: "오늘의 착샷입니다.",
        image:
          "https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/data/14.jpg",
        contents: "길 한복판에서 착샷 찍는건 민망.. 후다닥 찍음",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
    ])
  },
=======
        title: "제목 테스트",
        image: "image6",
        contents: "내용 테스트",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 6,
      },
    ])
>>>>>>> d4169a4e1d5ff483c99681c240c542907b09a866

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
