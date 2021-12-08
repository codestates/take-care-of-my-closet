const { user, post, comment } = require("../../models");
const db = require("../../models");

module.exports = async (req, res) => {
  const likes = db.sequelize.models.likes;

  const unlikes = db.sequelize.models.unlikes;
 

  const findUser = await user.findOne({
    where: { login_id : req.body.login_id}
  })
 
  const posts = await post.findOne({
    where :{id : req.body.lspostId, userId : findUser.id}
  })  
  console.log(posts);
  if(!posts){
    return res.status(401).json({message:"Unauthorized"})
  }

  await post.destroy({
    where: { id: req.body.postId },
  });

  await comment.destroy({
    where: { postId: req.body.postId },
  });

  await likes.destroy({
    where: { postId: req.body.postId },
  });

  await unlikes.destroy({
    where: { postId: req.body.postId },
  });

  res.status(200).json("success!");
};