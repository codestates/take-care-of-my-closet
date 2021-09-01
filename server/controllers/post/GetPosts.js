const { post, user } = require("../../models");

module.exports = async (req, res) => {
  //   const posts = await post.findAll({
  //     include: [{ model: user, attributes: ["nickname"] }],
  //   })
  if (!req.body.id) {
    let posts = await post.findAll({
      include: { model: user, required: true, attributes: ["nickname"] },
    });

    
    posts.sort(function (a,b){
      return b.id -a.id
    })


    res.status(200).json({ data: posts, message: "all posts" });
  } else {
    const dataUserId = req.body.id;

    const findUser = await user.findOne({
      where :{id: dataUserId}
    })
 
    if(!findUser){
      return res.status(400).json({message:"bad request"})
    }

    let posts = await post.findAll({
      where: { userId: dataUserId },
      include: {
        model: user,
        required: true,
        attributes: ["nickname"],
      },

    })
  
    posts.sort(function (a, b) {
      return b.id - a.id;
    });


    res.status(200).json({ data: posts, message: "my posts" });
  }
};
