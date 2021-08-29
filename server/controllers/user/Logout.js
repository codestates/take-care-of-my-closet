module.exports = async (req, res) => {
  console.log(req.cookie)
  res.cookie("set-cookie", null, {
    sameSite: "None",
    httpOnly: true,
    secure: false,
    maxAge: 0,
  })

  res.status(205).send("Logged out successfully")
}
