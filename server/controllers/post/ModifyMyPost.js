const { post } = require("../../models")

module.exports = async (req, res) => {
  const currentPost = req.body

  const findPost = await post.findOne({
    where : {id : currentPost.id}
  })

  if(!findPost){
    return res.send(404).json({message:"not found"})
  } 

  await post.update(currentPost, { where: { id: currentPost.id } })

  const updatePost = await post.findOne({ where: { id: currentPost.id } })

  res.status(200).send({ data: { userInfo: updatePost }, message: "ok" })
}
