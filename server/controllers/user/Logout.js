const { refreshtoken } = require("../../models")

module.exports = async (req, res) => {
  const refreshToken = req.headers["refreshtoken"]

  await refreshtoken.destroy({
    where: { value: refreshToken },
  })

  res.status(205).send("Logged out successfully")
}
