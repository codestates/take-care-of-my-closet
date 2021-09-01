require("dotenv").config();
const fs = require("fs");
const https = require("https");
const cors = require("cors");
const db = require("./models/index");

const express = require("express");
const app = express();

const controllers = require("./controllers");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "OPTIONS", "PUT", "POST"],
  })
);

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 ");
  })
  .catch(console.error);

app.use(cookieParser());
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
app.post("/deletecomment", controllers.deletepost);

//etc
app.post("/createFakeData", controllers.createFakeData);

const HTTPS_PORT = 4000;
let server;

if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8");
  const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8");
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log("server running"));
} else {
  console.log("http로실행");
  server = app.listen(HTTPS_PORT);
}

module.exports = server;
