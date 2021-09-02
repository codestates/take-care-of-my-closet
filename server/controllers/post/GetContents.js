const { post, user, comment } = require("../../models");
const db = require("../../models");
module.exports = async (req, res) => {
  // console.log(db)

  const likes = db.sequelize.models.likes;

  const unlikes = db.sequelize.models.unlikes;

  if (!req.body.postId) {
    return res.status(400).json({ message: "bad Request" });
  }

  let findContents = await post.findOne({
    where: { id: req.body.postId },
  });

  if (!findContents) {
    return res.status(404).json({ message: "Not Found!" });
  }

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
  });

  if (contents.length === 0) {
    contents = await post.findOne({ where: { id: req.body.postId } });

    const like = await likes.findAll({ where: { postId: req.body.postId } });

    const unlike = await unlikes.findAll({
      where: { postId: req.body.postId },
    });

    const final = contents;

    console.log(final);

    res.status(200).json({
      contents: contents,
      likeCount: like.length,
      unlikeCount: unlike.length,
      message: "ok",
    });
  } else {
    const like = await likes.findAll({ where: { postId: req.body.postId } });

    const unlike = await unlikes.findAll({
      where: { postId: req.body.postId },
    });

    const final = contents;

    console.log(final);

    res.status(200).json({
      contents: contents[0],
      likeCount: like.length,
      unlikeCount: unlike.length,
      message: "ok",
    });
  }
};
