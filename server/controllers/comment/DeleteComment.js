const { comment } = require("../../models");

module.exports = async (req, res) => {
  console.log("댓글삭제 요청", req.body);

  //{postId: 현재 게시글 아이디(pk), userId, 현재 댓글 작성한 유저 아이디(pk), comments: 댓글 내용}

  await comment.destroy({
    where: { id: req.body.id },
  });

  res.status(200).json({ message: "delete!" });
};
