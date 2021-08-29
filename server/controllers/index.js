module.exports = {
  //user
  login: require("./user/Login"),
  accessTokenRequest: require("./user/AccessTokenRequest"),
  signup: require("./user/SiginUp"),
  passwordCheck: require("./user/PasswordCheck"),
  duplicate: require("./user/Duplicate"),
  modifyuserinfo: require("./user/ModifyUserInfo"),

  //post
  getPosts: require("./post/GetPosts"),
  getContents: require("./post/GetContents"),
  modifymypost: require("./post/ModifyMyPost"),
  deletepost: require("./post/DeletePost"),
  likeunlike: require("./post/LikeUnlike"),
  createpost: require("./post/CreatePost"),

  //comment
  createComment: require("./comment/CreateComment"),
  deleteComment: require("./comment/DeleteComment"),

  //etc..
  createFakeData: require("./CreateFakeData"),
};

