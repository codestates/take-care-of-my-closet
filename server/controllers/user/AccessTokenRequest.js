const { user } = require("../../models")
const { verify } = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()

module.exports = (req, res) => {
  if (!req.headers.cookie) {
    res.status(401).json({ data: null, message: "invalid access token" })
  } else {
    const accessToken = req.headers.cookie.split("=")
    verify(accessToken[1], process.env.ACCESS_SECRET, async (err, decoded) => {
      if (err) {
        res.status(401).json({ data: null, message: "invalid access token" })
      } else {
        const userInfo = await user.findOne({
          where: { login_id: decoded.login_id },
        })
        console.log(userInfo)

        if (!userInfo) {
          res.status(404).send("access token has been tempred")
        } else {
          res.status(200).json({ data: { userInfo: userInfo }, message: "ok" })
        }
      }
    })
  }
}
