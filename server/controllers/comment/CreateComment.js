const { user, post, comment } = require("../../models")

module.exports = async (req, res) => {
  console.log(req.body)

  const newComment = req.body
  //{postId: 현재 게시글 아이디(pk), userId, 현재 댓글 작성한 유저 아이디(pk), comments: 댓글 내용}

  const create = await comment.create({
    postId: newComment.postId,
    userId: newComment.userId,
    contents: newComment.comments,
  })

  res.status(200).json({ message: "create!" })
}
