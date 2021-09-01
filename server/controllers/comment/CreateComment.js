const { comment,user } = require("../../models")

module.exports = async (req, res) => {

  const newComment = req.body
  console.log(req.body)
  //{postId: 현재 게시글 아이디(pk), userId, 현재 댓글 작성한 유저 아이디(pk), comments: 댓글 내용} 
  if(!newComment.contents){
    return res.status(400).json({message:'input please'})
  }
  
  await comment.create({
    postId: newComment.postId,
    userId: newComment.userId,
    contents: newComment.contents,
  })
  
  const commentAll = await comment.findAll({
    where: {postId: newComment.postId},
    include: {
      model: user,
      required: true,
      attributes: ["nickname"],
    }
  })

  res.status(200).json({data: commentAll, message: "create!" })
}
