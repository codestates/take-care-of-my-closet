const { user } = require("../../models")

module.exports = async (req, res) => {
  const userInfo = await user.findOne({
    where: { login_id: req.body.login_id, password: req.body.password },
  })

  if (!userInfo) {
    res.status(404).json({ message: "Not Found" })
  } else {
    res.status(200).json({ message: "ok" })
  }
}
/*
    {
        login_id: id
        password: password
    }
*/
