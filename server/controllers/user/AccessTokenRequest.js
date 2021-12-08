const { user } = require("../../models")
const { verify } = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()

module.exports = (req, res) => {
  // console.log('엑세스', req.cookies)
  if(req.headers.cookie){

    const accessToken = req.headers.cookie.split(' ')[0].split('=')[1].slice(0, -1);
    try {
      verify(accessToken, process.env.ACCESS_SECRET)
    } catch {
      res.status(401).json({ data: null, message: "unauthorized" })
    }
    const userInfo = verify(accessToken, process.env.ACCESS_SECRET)
    return res.status(200).json({ data: { userInfo: userInfo }, message: "ok" })
  }else {
    return ;
  }
}