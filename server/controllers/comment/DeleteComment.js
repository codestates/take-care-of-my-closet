const { comment,user } = require("../../models")

module.exports = async (req, res) => {
  
  //{postId: 현재 게시글 아이디(pk), userId, 현재 댓글 작성한 유저 아이디(pk), comments: 댓글 내용}
  const deleteComment = req.body 

  if(!req.body.id){
   res.status(404).json({message: "not found"})
  }
  
   await comment.destroy({
    where: { id: req.body.id },
  })
  
  const commentAll = await comment.findAll({
    where: {postId: deleteComment.postId},
    include: {
      model: user,
      required: true,
      attributes: ["nickname"],
    }
  })

  res.status(200).json({data : commentAll, message: "delete!" })
}
