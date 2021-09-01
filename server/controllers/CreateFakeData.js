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
<<<<<<< HEAD
    {
      userId: 5,
      postId: 4,
    },
  ]
=======
>>>>>>> 7aa404179257ae6bc00cc6f33c239d68c3f85290

    {
<<<<<<< HEAD
      userId: 1,
      postId: 6,
=======
      userId: 5,
      postId: 4,
>>>>>>> 7aa404179257ae6bc00cc6f33c239d68c3f85290
    },
  ]
  
  const unlikesData = [
    {
<<<<<<< HEAD
=======
      userId: 1,
      postId: 6,
    },
    {
>>>>>>> 7aa404179257ae6bc00cc6f33c239d68c3f85290
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
