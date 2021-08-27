const { user } = require("../../models")
const { sign } = require("jsonwebtoken")

module.exports =  async (req, res) => {
  
//  const userInfo = await user.findAll({
//     where: { login_id: req.body.login_id,password:req.body.password },
//   })
 
   res.sendStatus(200);
  // console.log(userInfo)        
  
  // if (!userInfo) {
  //    return res.json({message: 'not authorized'})
  // }    
  // else {
  //  delete userInfo.dataValues.password;
  //  const accessToken = sign(userInfo.dataValues, process.env.ACCESS_SECRET,{expiresIn : "15"});
   
  //  console.log(accessToken)
  //  res.json({data: {accessToken}, message: "ok"});
  // }
}
