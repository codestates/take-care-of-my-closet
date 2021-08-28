const { post } = require("../../models")

module.exports = async (req, res) => {
    const currentPost = req.body
    await post.create(currentPost)
    res.status(200).send({ data: { userInfo: currentPost }, message: "ok" })
}
