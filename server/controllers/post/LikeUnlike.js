const db = require("../../models");

module.exports = async (req, res) => {
  const data = req.body;

  const likes = db.sequelize.models.likes;
  const unlikes = db.sequelize.models.unlikes;

  if (data.click === "like") {
    const isUnlike = await unlikes.findOne({
      where: { userId: data.userId, postId: data.postId },
    });
    if (isUnlike) {
      await unlikes.destroy({
        where: { userId: data.userId, postId: data.postId },
      });
    }

    const [isLike, create] = await likes.findOrCreate({
      where: { userId: data.userId, postId: data.postId },
      defaults: {
        userId: data.userId,
        postId: data.postId,
      },
    });
    if (!create) {
      await likes.destroy({
        where: { userId: data.userId, postId: data.postId },
      });
    }
    const like = await likes.findAll({ where: { postId: data.postId } });
    const unlike = await unlikes.findAll({ where: { postId: data.postId } });

    res.status(200).json({
      data: { like: like.length, unlike: unlike.length },
      message: "ok",
    });
  } else {
    const islike = await likes.findOne({
      where: { postId: data.postId, userId: data.userId },
    });
    if (islike) {
      await likes.destroy({
        where: { postId: data.postId, userId: data.userId },
      });
    }
    const [isLike, create] = await unlikes.findOrCreate({
      where: { postId: data.postId, userId: data.userId },
      default: { postId: data.postId, userId: data.userId },
    });
    if (!create) {
      await unlikes.destroy({
        where: { postId: data.postId, userId: data.userId },
      });
    }

    const like = await likes.findAll({ where: { postId: data.postId } });
    const unlike = await unlikes.findAll({ where: { postId: data.postId } });

    res.status(200).json({
      data: { like: like.length, unlike: unlike.length },
      message: "ok",
    });
  }
};
