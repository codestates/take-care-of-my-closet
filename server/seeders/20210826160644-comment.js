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
        contents: "가을 갬성 좋네요!!",
        userId: 1,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "룩의 전체적인 밸런스가 너무 좋네요ㅎㅎ",
        userId: 2,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "분위기 ㄷㄷ",
        userId: 3,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "잘 어울리세요!",
        userId: 4,
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "조합은 불호지만 샌들은 나름 느낌 있네요",
        userId: 1,
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "샌들 + 양말..",
        userId: 6,
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
        contents: "멋지네요~~^^",
        userId: 5,
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "멋지네요~",
        userId: 6,
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "가디건으로 포인트 컬러 주신거 좋습니다^^",
        userId: 1,
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "자켓 이쁘다",
        userId: 2,
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "패완몸 ㄷㄷㄷ",
        userId: 4,
        postId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "무난 무난 합니다 헤어스타일 좋네요!",
        userId: 1,
        postId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "핏 좋습니다!!",
        userId: 3,
        postId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "참고 하겠습니다!",
        userId: 4,
        postId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "스트릿 저는 불호",
        userId: 3,
        postId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "고수분..ㄷㄷ",
        userId: 2,
        postId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "자켓은 마원인가요? 꾸안꾸 느낌 좋네요",
        userId: 4,
        postId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "요즘 밤공기 좋더라구요~ 그래도 아직은 좀 더울듯..!",
        userId: 5,
        postId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "아직은 이를듯..!",
        userId: 1,
        postId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "전체적인 조합이 좋습니다~^^",
        userId: 4,
        postId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "아직 이르군요ㅠ 참고하겠습니다",
        userId: 3,
        postId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "갬성..ㄷㄷㄷ",
        userId: 2,
        postId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "셔츠 잘 어울리시네요!!",
        userId: 3,
        postId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "전체적인 조합이 좋습니다~^^",
        userId: 4,
        postId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "장발 ㄷㄷㄷ",
        userId: 6,
        postId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "코로나로 힘든시기.. 이겨냅시다!!",
        userId: 5,
        postId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "할로윈 분장 이쁘네요~ 조커 분장일까요?",
        userId: 3,
        postId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "전체적인 조합이 좋습니다~^^",
        userId: 2,
        postId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "꾸안꾸 느낌 제대로네요",
        userId: 3,
        postId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "이런 후리함 극호",
        userId: 6,
        postId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "참고 하겠습니다!",
        userId: 4,
        postId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "신발로 포인트 좋습니다!",
        userId: 5,
        postId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "이런 느낌 극호",
        userId: 4,
        postId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "다리가 길어서 부츠가 잘 어울리네요!",
        userId: 1,
        postId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "충분히 좋습니다!!",
        userId: 2,
        postId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "고맙습니다~",
        userId: 3,
        postId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "장발 잘 어울리세요!",
        userId: 1,
        postId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "나는 장발 불호",
        userId: 3,
        postId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "게이라뇨 전혀요",
        userId: 5,
        postId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "멋지세요!!",
        userId: 6,
        postId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "wow",
        userId: 2,
        postId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "참고 하겠습니다!",
        userId: 4,
        postId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "나무랄데 없는듯",
        userId: 3,
        postId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "전체적인 느낌이 좋네요",
        userId: 6,
        postId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        contents: "완벽",
        userId: 5,
        postId: 14,
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
