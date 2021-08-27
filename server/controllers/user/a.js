const { user } = require("../../models")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()

module.exports = (req, res) => {
  // TODO: urclass의 가이드를 참고하여 GET /accesstokenrequest 구현에 필요한 로직을 작성하세요.
  console.log(req.headers)

  if (!req.headers.authorization) {
    res.status(400).json({ data: null, message: "invalid access token" })
  } else {
    const authorization = req.headers["authorization"]

    const token = authorization.split(" ")[1]

    jwt.verify(token, process.env.ACCESS_SECRET, async (err, decoded) => {
      if (err)
        return res
          .status(400)
          .json({ data: null, message: "invalid access token" })

      const userInfo = await Users.findOne({
        where: { userId: decoded.userId },
      })

      if (!userInfo) {
        res
          .status(404)
          .json({ data: null, message: "access token has been tempered" })
      } else {
        const { id, userId, email, createdAt, updatedAt } = decoded

        res.status(200).json({
          data: { userInfo: { id, userId, email, createdAt, updatedAt } },
          message: "ok",
        })
      }
    })
  }
}
