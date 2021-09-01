const { post, user, comment } = require("../../models");
const db = require("../../models");
module.exports = async (req, res) => {
  // console.log(db)

  const likes = db.sequelize.models.likes;

  const unlikes = db.sequelize.models.unlikes;

  const contents = await post.findAll({
    where: { id: req.body.postId },
    include: [
      {
        model: user,
        attributes: ["nickname"],
        required: true,
      },
    ],
    include: [
      {
        model: comment,
        attributes: ["id", "contents", "createdAt"],
        required: true,
        include: [
          {
            model: user,
            attributes: ["nickname"],
            required: true,
          },
        ],
      },
    ],
  });

  const like = await likes.findAll({ where: { postId: req.body.postId } });

  const unlike = await unlikes.findAll({ where: { postId: req.body.postId } });

  const final = contents[0];

  // console.log(final);

  res.status(200).json({
    contents: contents[0],
    likeCount: like.length,
    unlikeCount: unlike.length,
    message: "ok",
  });
};

// {
//   "contents": [
//       {
//           "id": 4,
//           "title": "게이 같음?",
//           "image": "image4",
//           "contents": "ㅈㄱㄴ",
//           "createdAt": "2021-08-28T07:58:19.000Z",
//           "updatedAt": "2021-08-28T07:58:19.000Z",
//           "userId": 3,
//           "comments": [
//               {
//                   "id": 3,
//                   "contents": "게이야..",
//                   "createdAt": "2021-08-28T07:58:19.000Z",
//                   "updatedAt": "2021-08-28T07:58:19.000Z",
//                   "userId": 1,
//                   "postId": 4,
//                   "user": {
//                       "nickname": "test1"
//                   }
//               },
//               {
//                   "id": 5,
//                   "contents": "이건 좀...",
//                   "createdAt": "2021-08-28T07:58:19.000Z",
//                   "updatedAt": "2021-08-28T07:58:19.000Z",
//                   "userId": 2,
//                   "postId": 4,
//                   "user": {
//                       "nickname": "test2"
//                   }
//               },
//               {
//                   "id": 10,
//                   "contents": "난 좋은데?",
//                   "createdAt": "2021-08-28T07:58:19.000Z",
//                   "updatedAt": "2021-08-28T07:58:19.000Z",
//                   "userId": 4,
//                   "postId": 4,
//                   "user": {
//                       "nickname": "test4"
//                   }
//               }
//           ]
//       }
//   ],
//   "likeCount": 2,
//   "unlikeCount": 3,
//   "message": "ok"
// }
