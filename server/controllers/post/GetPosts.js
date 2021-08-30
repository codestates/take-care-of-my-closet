const { post, user } = require("../../models");

module.exports = async (req, res) => {
  //   const posts = await post.findAll({
  //     include: [{ model: user, attributes: ["nickname"] }],
  //   })
  if (!req.body.id) {
    // 전체 게시글 요청
    const posts = await post.findAll({
      include: { model: user, required: true, attributes: ["nickname"] },
    });
    if (posts) {
      // db 조회후 데이터가 있으면
      return res.status(200).json({ data: posts, message: "all posts" });
    } else {
      // db 조회후 데이터가 없으면
      return res.status(404).json({ data: null, message: "not found" });
    }
  } else {
    // 내가 쓴 글만 요청
    const dataUserId = req.body.id;

    const posts = await post.findAll({
      where: { userId: dataUserId },
      include: {
        model: user,
        required: true,
        attributes: ["nickname"],
      },
    });

    if (posts) {
      return res.status(200).json({ data: posts, message: "my posts" });
    } else {
      return res.status(404).json({ data: null, message: "not found" });
    }
  }
};
