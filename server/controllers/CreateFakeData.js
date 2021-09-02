const db = require("../models")

module.exports = async (req, res) => {
  //   console.log(db.sequelize.models.likes)

  const likes = db.sequelize.models.likes

  const unlikes = db.sequelize.models.unlikes

  const likesData = [
    {
      userId: 1,
      postId: 1,
    },
    {
      userId: 2,
      postId: 1,
    },
    {
      userId: 3,
      postId: 1,
    },
    {
      userId: 4,
      postId: 1,
    },
    {
      userId: 4,
      postId: 3,
    },
    {
      userId: 5,
      postId: 4,
    },
    {
      userId: 6,
      postId: 3,
    },
    {
      userId: 1,
      postId: 4,
    },
    {
      userId: 2,
      postId: 4,
    },

    {
      userId: 1,
      postId: 5,
    },

    {
      userId: 4,
      postId: 6,
    },
    {
      userId: 4,
      postId: 7,
    },
    {
      userId: 5,
      postId: 7,
    },
    {
      userId: 4,
      postId: 8,
    },
    {
      userId: 2,
      postId: 9,
    },
    {
      userId: 3,
      postId: 9,
    },
    {
      userId: 4,
      postId: 9,
    },
    {
      userId: 5,
      postId: 10,
    },
    {
      userId: 3,
      postId: 10,
    },
    {
      userId: 2,
      postId: 11,
    },
    {
      userId: 3,
      postId: 11,
    },
    {
      userId: 6,
      postId: 11,
    },
    {
      userId: 4,
      postId: 11,
    },
    {
      userId: 5,
      postId: 11,
    },
    {
      userId: 4,
      postId: 12,
    },
    {
      userId: 1,
      postId: 12,
    },
    {
      userId: 2,
      postId: 12,
    },
    {
      userId: 1,
      postId: 13,
    },
    {
      userId: 5,
      postId: 13,
    },
    {
      userId: 6,
      postId: 13,
    },
    {
      userId: 2,
      postId: 14,
    },
    {
      userId: 4,
      postId: 14,
    },
    {
      userId: 3,
      postId: 14,
    },
    {
      userId: 5,
      postId: 14,
    },
  ]

  const unlikesData = [
    {
      userId: 1,
      postId: 2,
    },
    {
      userId: 6,
      postId: 2,
    },
    {
      userId: 3,
      postId: 3,
    },
    {
      userId: 4,
      postId: 5,
    },
    {
      userId: 3,
      postId: 6,
    },
    {
      userId: 2,
      postId: 6,
    },
    {
      userId: 1,
      postId: 8,
    },
    {
      userId: 6,
      postId: 9,
    },
    {
      userId: 3,
      postId: 13,
    },
  ]

  const test = await likes.bulkCreate(likesData)

  const test2 = await unlikes.bulkCreate(unlikesData)

  res.status(200).json({ message: "test" })
}
