const { user } = require("../../models")

module.exports = async (req, res) => {
  console.log(req.body.userinfo)
  const { login_id, password, nickname, image } = req.body.userinfo

  const [userInfo, created] = await user.findOrCreate({
    where: { login_id: login_id },
    defaults: {
      login_id: login_id,
      password: password,
      nickname: nickname,
      user_image: image,
    },
  })

  if (!created) {
    res.status(409).json({ message: "already exist" })
  } else {
    res.status(201).json({ message: "create!" })
  }

  /*
    "userInfo": {
        "id": 1,
        "login_id": "kimcoding1",
        "password": "1234",
        "user_image": "image1",
        "nickname": "test1",
        "createdAt": "2021-08-27T05:53:15.000Z",
        "updatedAt": "2021-08-27T05:53:15.000Z"
    }
*/
}