const { user } = require("../../models")

module.exports = async (req, res) => {
  console.log(req.body)

  const userInfo = await user.findAll()

  res.status(200).json({ data: userInfo, message: "test" })
}
