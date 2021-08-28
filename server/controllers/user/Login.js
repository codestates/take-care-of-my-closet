const { user } = require("../../models")
const { sign } = require("jsonwebtoken")

module.exports = async (req, res) => {
  const userInfo = await user.findOne({
    where: { login_id: req.body.login_id, password: req.body.password },
  })

  if (!userInfo) {
    return res.json({ message: "not authorized" })
  } else {
    delete userInfo.dataValues.password
    const accessToken = sign(userInfo.dataValues, process.env.ACCESS_SECRET, {
      expiresIn: "1d",
    })

    await res.cookie(
      "set-cookie",
      { jwt: accessToken },
      { HttpOnly: true, Secure: false, SameSite: "None" }
    )

    res.status(200).send({ message: "ok" })
  }
}
