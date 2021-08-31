const db = require("../models");

module.exports = async (req, res) => {
  //   console.log(db.sequelize.models.likes)

  const likes = db.sequelize.models.likes;

  const unlikes = db.sequelize.models.unlikes;

  const likesData = [
    {
      userId: 1,
      postId: 2,
    },
    {
      userId: 1,
      postId: 4,
    },
    {
      userId: 1,
      postId: 7,
    },
    {
      userId: 2,
      postId: 1,
    },
    {
      userId: 2,
      postId: 5,
    },
    {
      userId: 3,
      postId: 1,
    },
    {
      userId: 3,
      postId: 3,
    },
    {
      userId: 3,
      postId: 7,
    },
    {
      userId: 4,
      postId: 1,
    },

    {
      userId: 4,
      postId: 2,
    },

    {
      userId: 4,
      postId: 3,
    },
    {
      userId: 4,
      postId: 4,
    },

    {
      userId: 5,
      postId: 4,
    },
  ]
  
  const unlikesData = [
    {
      userId: 1,
      postId: 6,
    },
    {
      userId: 2,
      postId: 6,
    },
    {
      userId: 3,
      postId: 4,
    },
    {
      userId: 4,
      postId: 6,
    },
    {
      userId: 5,
      postId: 5,
    },
    {
      userId: 5,
      postId: 7,
    },
  ];

  const test = await likes.bulkCreate(likesData);

  const test2 = await unlikes.bulkCreate(unlikesData);

  res.status(200).json({ message: "test" });
};
