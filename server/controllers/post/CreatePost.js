const { post } = require("../../models");

module.exports = async (req, res) => {
  const checkList = ["userId", "image", "title", "contents"]
  const requestList = Object.keys(req.body)
  const result = checkList.map((el) => {
    return requestList.includes(el)
  })
  
  if(result.includes(false)){
    res.status(400).json({message:"bad request"})
  }  

  const currentPost = req.body

  await post.create({
        title: currentPost.title,
        image: currentPost.image,
        contents: currentPost.contents,
        userId: currentPost.userId,
  })



  res.status(200).send({message: "ok" });
};
