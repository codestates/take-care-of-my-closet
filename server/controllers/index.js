module.exports = {
  login: require("./user/Login"),
  accessTokenRequest: require("./user/AccessTokenRequest"),
  signup: require("./user/SiginUp"),
  passwordCheck: require("./user/PasswordCheck"),
  getPosts: require("./post/GetPosts"),
  duplicate: require("./user/Duplicate"),
  createFakeData: require("./create/CreateFakeData"),
  createComment: require("./create/CreateComment"),
  getContents: require("./post/GetContents"),
  modifyuserinfo: require("./user/ModifyUserInfo"),
  modifymypost: require("./post/ModifyMyPost"),
  deletepost : require("./post/DeletePost"),
  likeunlike : require("./post/LikeUnlike"),
  createpost : require("./post/CreatePost")
}
