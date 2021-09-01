const { refreshtoken } = require("../../models")

module.exports = async (req, res) => {
  // console.log("리프레시토큰", req.headers.refreshtoken);
  const refreshToken = req.headers["refreshtoken"]
       
  
 try{
  await refreshtoken.destroy({
    where: { value: refreshToken },
  })
 }catch{
  res.status(205).send("Logged out successfully")
 }

  res.status(205).send("Logged out successfully")
}
