const { refreshtoken } = require("../../models")
const { verify, sign } = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()

module.exports = async (req, res) => {
  const refreshToken = req.headers["refreshtoken"]
  try {
    verify(refreshToken, process.env.REFRESH_SECRET)
  } catch {
    //만료될시 db에서 지움
    await refreshtoken.destroy({
      where: { value: refreshToken },
    })
    return res.status(401).json({ data: null, message: "unauthorized" })
  }

  const findrefresh = await refreshtoken.findOne({
    where: { value: refreshToken },
  })

  if (!findrefresh) {
    res.status(404).json({ data: null, message: "not found" })
  } else {
    const userInfo = verify(refreshToken, process.env.REFRESH_SECRET)
    delete userInfo.exp
    const accessToken = sign(userInfo, process.env.ACCESS_SECRET, {
      expiresIn: "1h",
    })

    await res.cookie("accessToken", accessToken, {
      HttpOnly: true,
      Secure: false,
      SameSite: "None",
    })

    return res.status(200).json({ message: "ok" })
  }
}
