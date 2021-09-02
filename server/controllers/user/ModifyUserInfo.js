const { user, refreshtoken } = require("../../models");
const { sign } = require("jsonwebtoken");

module.exports = async (req, res) => {

  const findUser1 = await user.findOne({
    where: {
      login_id: req.body.login_id,
    },
  })
  
  let currentUser = {
    id : 2,
     login_id : req.body.login_id,
     password : req.body.password || findUser1.password,
     user_image : req.body.image || findUser1.user_image,
     nickname :req.body.nickname || findUser1.nickname,
    }

  await user.update(currentUser, {
    where: {
      login_id: currentUser.login_id,
    },
  });

  const findUser = await user.findOne({
    where: { login_id: currentUser.login_id },

  })
  
  delete findUser.dataValues.password

  const accessToken = sign(findUser.dataValues, process.env.ACCESS_SECRET, {
    expiresIn: "1h",
  });

  const refreshToken = sign(findUser.dataValues, process.env.REFRESH_SECRET, {
    expiresIn: "14d",
  });

  await res.cookie("accessToken", accessToken, {
    HttpOnly: true,
    Secure: false,
    SameSite: "None",
  });

  await res.cookie("refreshToken", refreshToken, {
    HttpOnly: true,
    Secure: false,
    SameSite: "None",
  });

  res.status(200).json({
    data: { userInfo: findUser },
    message: "ok",
  });
};
