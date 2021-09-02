require("dotenv").config();
const cors = require("cors");
const db = require("./models/index");
const express = require("express");
const app = express();
const controllers = require("./controllers");
const cookieParser = require("cookie-parser");
const upload = require("./modules/multer");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "OPTIONS", "POST", "PUT"],
  })
);

// db.sequelize
//   .sync()
//   .then(() => {
//     console.log("db 연결 ")
//   })
//   .catch(console.error)

app.use(cookieParser());

//get Server
app.get("/", (req, res) => {
  res.status(200).send("Welcome, closet Server!");
});

//user
app.post("/login", controllers.login);
app.get("/accessTokenrequest", controllers.accessTokenRequest);
app.get("/refreshTokenrequest", controllers.refreshTokenRequest);
app.post("/signup", controllers.signup);
app.get("/logout", controllers.logout);
app.post("/passwordCheck", controllers.passwordCheck);
app.post("/duplicate", controllers.duplicate);
app.put("/modifyuserinfo", controllers.modifyuserinfo);

//post
app.post("/getposts", controllers.getPosts);
app.post("/getContents", controllers.getContents);
app.put("/modifymypost", controllers.modifymypost);
app.post("/likeunlike", controllers.likeunlike);
app.post("/deletepost", controllers.deletepost);
app.post("/createpost", controllers.createpost);

//comment
app.post("/createComment", controllers.createComment);
app.post("/deletecomment", controllers.deletecomment);

//etc
app.post("/createFakeData", controllers.createFakeData);
app.post("/upload", upload.single("closet"), controllers.upload);

const HTTPS_PORT = 80;
let server;

server = app.listen(HTTPS_PORT, () => {
  console.log("server 실행");
});

module.exports = server;
