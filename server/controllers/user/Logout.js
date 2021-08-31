const { refreshtoken } = require("../../models");

module.exports = async (req, res) => {
  // console.log("리프레시토큰", req.headers.refreshtoken);
  const refreshToken = req.headers["refreshtoken"];

  await refreshtoken.destroy({
    where: { value: refreshToken },
  });

  res.status(205).send("Logged out successfully");
};
