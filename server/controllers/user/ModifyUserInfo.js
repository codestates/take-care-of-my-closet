const { user } = require("../../models")
const { sign } = require("jsonwebtoken")

module.exports = async (req, res) => {
  const currentUser = req.body

  //클라이언트에서 유효성검사를 하지만 혹시나해서 만들어 놓은것
  //if문 빼고 const updateuser = ~res.status(200).send("ok")까지만 있어도 됨
  // const findUser = await user.findOne({
  //  where : { login_id: currentUser.login_id }
  // })

  // if(!findUser){
  //  res.status(404).send("not found");
  // }else{}
  const updateUser = await user.update(currentUser, {
    where: {
      login_id: currentUser.login_id,
    },
  })

  const findUser = await user.findOne({
    where: { login_id: currentUser.login_id },
  })
  delete findUser.dataValues.password
  const accessToken = sign(findUser.dataValues, process.env.ACCESS_SECRET, {
    expiresIn: "1d",
  })

  res
    .status(200)
    .send({
      data: { usrInfo: findUser, accessToken: accessToken },
      message: "ok",
    })
}
