const { user, refreshtoken } = require("../../models");
const { sign } = require("jsonwebtoken");

module.exports = async (req, res) => {
  const findUserInfo = await user.findOne({
    where: { login_id: req.body.login_id, password: req.body.password },
  });
  if (!findUserInfo) {
    return res.json({ message: "not authorized" });
  } else {
    const userInfo = findUserInfo.dataValues;
    delete userInfo.password;
    //console.log(userInfo.dataValues)
    const accessToken = sign(userInfo, process.env.ACCESS_SECRET, {
      expiresIn: "30s",
    });
    const refreshToken = sign(userInfo, process.env.REFRESH_SECRET, {
      expiresIn: "14d",
    });
    console.log(userInfo.id);
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

    // console.log(userInfo.id);
    // await refreshtoken.create({
    //   value: refreshToken,
    //   userId: userInfo.id,
    // });

    res.status(200).send({ message: "ok" });
  }
};
