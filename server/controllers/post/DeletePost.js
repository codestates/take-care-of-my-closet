const { post,comment } = require("../../models")
const db = require("../../models")


module.exports = async (req, res) => {
 
    const likes = db.sequelize.models.likes

    const unlikes = db.sequelize.models.unlikes

    await post.destroy({
    where: {id:req.body.id}
    })

    await comment.destroy({
    where: {postId:req.body.id}
    })

    await likes.destroy({
        where : {postId:req.body.id}
    }) 

    await unlikes.destroy({
        where : {postId:req.body.id}
    }) 

    res.status(200).json("success!");
}
