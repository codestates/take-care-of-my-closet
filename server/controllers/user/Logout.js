const { refreshtoken } = require("../../models")

module.exports = async (req, res) => {
  // console.log("리프레시토큰", req.headers.refreshtoken);
  const refreshToken = req.headers.cookie.split(' ')[0].split('=')[1];
       console.log(req.cookies)
 try{
  await refreshtoken.destroy({
    where: { value: refreshToken },
  })
  res.clearCookie('refreshToken')
  res.clearCookie('accessToken' ).status(200).json({ message: 'ok' })
  // res.clearCookie().status(200).json({ message: 'ok' })
 }catch{
  res.clearCookie('refreshToken')
  res.clearCookie('accessToken').status(200).json({ message: 'ok' })
  // res.clearCookie().status(200).json({ message: 'ok' })
 }
  
}
