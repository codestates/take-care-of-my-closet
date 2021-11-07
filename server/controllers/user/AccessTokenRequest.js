const { user } = require("../../models")
const { verify } = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()

module.exports = (req, res) => {
  // console.log('*****************',req.headers.cookie.split(' ')[0].split('=')[1].slice(0, -1))
  // const accessToken = req.headers["accessToken"]
  const accessToken = req.headers.cookie.split(' ')[0].split('=')[1].slice(0, -1);
  try {
    verify(accessToken, process.env.ACCESS_SECRET)
  } catch {
    res.status(401).json({ data: null, message: "unauthorized" })
  }
  const userInfo = verify(accessToken, process.env.ACCESS_SECRET)
  return res.status(200).json({ data: { userInfo: userInfo }, message: "ok" })
}
