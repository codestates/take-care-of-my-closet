const { user } = require("../../models")
const { verify } = require("jsonwebtoken")
const dotenv = require("dotenv")
const { decode } = require("punycode")
dotenv.config()

module.exports = (req, res) => {
  // TODO: urclass의 가이드를 참고하여 GET /accesstokenrequest 구현에 필요한 로직을 작성하세요.
  // console.log(req.headers)
  if (!req.headers.accesstoken) {
    res.status(401).json({ data: null, message: "invalid access token" })
  } else {
    verify(
      req.headers.accesstoken,
      process.env.ACCESS_SECRET,
      async (err, decoded) => {
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
            res
              .status(200)
              .json({ data: { userInfo: userInfo }, message: "ok" })
          }
        }
      }
    )
  }
}
