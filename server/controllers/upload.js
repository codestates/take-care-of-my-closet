module.exports = async (req, res) => {
  const image = req.file.location
  if (image === undefined) {
    return res.status(400).send("이미지가 존재하지 않습니다,")
  }
  return res.status(200).send({ image_url: image, message: "ok" })
}
