const { user } = require("../../models");
const { verify } = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res) => {
  const accessToken = req.headers["accesstoken"];
  console.log(accessToken);
  if (!accessToken) {
    res.status(401).json({ data: null, message: "invalid access token" });
  } else {
    const userInfo = verify(accessToken, process.env.ACCESS_SECRET);

    return res
      .status(200)
      .json({ data: { userInfo: userInfo }, message: "ok" });
  }
};
