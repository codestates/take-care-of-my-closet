const { user, refreshtoken } = require("../../models")
const { sign } = require("jsonwebtoken")

module.exports = async (req, res) => {
  let currentUser
  if (req.body.password) {
    currentUser = req.body
  } else {
    const findUser = await user.findOne({
      where: {
        login_id: req.body.login_id,
      },
    })
    currentUser = req.body
    currentUser.password = findUser.password
  }

  await user.update(currentUser, {
    where: {
      login_id: currentUser.login_id,
    },
  })

  const findUser = await user.findOne({
    where: { login_id: currentUser.login_id },
  })

  console.log(findUser.dataValues)
  delete findUser.dataValues.password

  const accessToken = sign(findUser.dataValues, process.env.ACCESS_SECRET, {
    expiresIn: "1h",
  })

  const refreshToken = sign(findUser.dataValues, process.env.REFRESH_SECRET, {
    expiresIn: "14d",
  })

  await res.cookie("accessToken", accessToken, {
    HttpOnly: true,
    Secure: false,
    SameSite: "None",
  })

  await res.cookie("refreshToken", refreshToken, {
    HttpOnly: true,
    Secure: false,
    SameSite: "None",
  })

  res.status(200).json({
    data: { usrInfo: findUser },
    message: "ok",
  })
}
