const { post, user, comment } = require("../../models")
const db = require("../../models")
module.exports = async (req, res) => {
  // console.log(db)

  const likes = db.sequelize.models.likes

  const unlikes = db.sequelize.models.unlikes

  let contents = await post.findAll({
    where: { id: req.body.postId },
    include: [
      {
        model: user,
        attributes: ["nickname"],
        required: true,
      },
    ],
    include: [
      {
        model: comment,
        attributes: ["id", "contents", "createdAt"],
        required: true,
        include: [
          {
            model: user,
            attributes: ["nickname"],
            required: true,
          },
        ],
      },
    ],
  })

  console.log(contents)

  if (contents.length === 0) {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    contents = await post.findOne({ where: { id: req.body.postId } })

    const like = await likes.findAll({ where: { postId: req.body.postId } })

    const unlike = await unlikes.findAll({ where: { postId: req.body.postId } })

    const final = contents

    console.log(final)

    res.status(200).json({
      contents: contents,
      likeCount: like.length,
      unlikeCount: unlike.length,
      message: "ok",
    })
  } else {
    const like = await likes.findAll({ where: { postId: req.body.postId } })

    const unlike = await unlikes.findAll({ where: { postId: req.body.postId } })

    const final = contents

    console.log(final)

    res.status(200).json({
      contents: contents[0],
      likeCount: like.length,
      unlikeCount: unlike.length,
      message: "ok",
    })
  }
}

