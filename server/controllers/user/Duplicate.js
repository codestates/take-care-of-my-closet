const { user } = require("../../models");

module.exports = async (req, res) => {

  if(!req.body.nickname && !req.body.login_id){
    res.status(400).json({message:"bad request"})
  }

  if (!req.body.nickname) {
    const isExist = await user.findOne({
      where: { login_id: req.body.login_id },
    });

    if (!isExist) {
      res.status(200).send({ message: "ok" });
    } else {
      res.status(409).send({ message: "It's already created" });
    }
  } else {
    const isExist = await user.findOne({
      where: { nickname: req.body.nickname },
    });
    if (!isExist) {
      res.status(200).send({ message: "ok" });
    } else {
      res.status(409).send({ message: "It's already created" });
    }
  }
};
