const { post, user } = require("../../models")

module.exports = async (req, res) => {
  //   const posts = await post.findAll({
  //     include: [{ model: user, attributes: ["nickname"] }],
  //   })
  if (!req.body.id) {
    const posts = await post.findAll({
      include: { model: user, required: true, attributes: ["nickname"] },
    });

    res.status(200).json({ data: posts, message: "all posts" });
  } else {
    const dataUserId = req.body.id;

    const posts = await post.findAll({
      where: { userId: dataUserId },
      include: {
        model: user,
        required: true,
        attributes: ["nickname"],
      },
    })

    res.status(200).json({ data: posts, message: "my posts" });
  }
}
