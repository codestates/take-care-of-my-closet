module.exports = {
 
  //user
  accessTokenRequest: require("./user/AccessTokenRequest"),
  duplicate: require("./user/Duplicate"),
  login: require("./user/Login"),
  logout: require("./user/Logout"),
  modifyuserinfo: require("./user/ModifyUserInfo"),
  passwordCheck: require("./user/PasswordCheck"),
  refreshTokenRequest: require("./user/RefreshTokenRequest"),
  signup: require("./user/SiginUp"),
  
  //post
  createpost : require("./post/CreatePost"),
  deletepost : require("./post/DeletePost"),
  getContents: require("./post/GetContents"),
  getPosts: require("./post/GetPosts"),
  likeunlike : require("./post/LikeUnlike"),
  modifymypost: require("./post/ModifyMyPost"),
  
  //comment
  createComment: require("./comment/CreateComment"),
  deletecomment: require("./comment/DeleteComment"),

  //etc..
  createFakeData: require("./CreateFakeData"),
  upload: require("./upload")
}
