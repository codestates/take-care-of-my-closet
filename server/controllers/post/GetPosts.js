const { post, user } = require("../../models")

module.exports = async (req, res) => {
  //   const posts = await post.findAll({
  //     include: [{ model: user, attributes: ["nickname"] }],
  //   })

  const posts = await post.findAll({
    include: { model: user, attributes: ["nickname"] },
  })

  console.log(posts)

  res.status(200).json({ data: posts })
}
