require("dotenv").config()
const fs = require("fs")
const https = require("https")
const cors = require("cors")
const db = require("./models/index")

const express = require("express")
const app = express()

const controllers = require("./controllers")

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  cors({
    origin: true,
    credentials: true,
  })
)

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 ")
  })
  .catch(console.error)

app.get("/", (req, res) => {
  res.status(200).send("Welcome, take_care_Server!")
  // status는 응답코드, send에 바디값을 넣어 응답을 보내줌
})

app.post("/login", controllers.login)
app.get("/accessTokenrequest", controllers.accessTokenRequest)
app.post("/signup", controllers.signup)
app.post("/passwordCheck", controllers.passwordCheck)
app.post("/getposts", controllers.getPosts)
app.post("/duplicate", controllers.duplicate)
app.post("/createFakeData", controllers.createFakeData)
app.post("/createComment", controllers.createComment)
app.post("/getContents", controllers.getContents)
app.put("/modifymypost", controllers.modifymypost)
app.put("/modifyuserinfo", controllers.modifyuserinfo)
app.post("/deletepost", controllers.deletepost)
app.post("/likeunlike", controllers.likeunlike)
app.post("/createpost", controllers.createpost)
app.post("/deleteComment", controllers.deleteComment)

const HTTPS_PORT = 80

let server

console.log("server 실행")

server = app.listen(HTTPS_PORT)

module.exports = server
