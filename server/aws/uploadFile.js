const fs = require("fs")
const AWS = require("aws-sdk")
const BUCKET_NAME = "take-closet-bucket"
const s3 = new AWS.S3({
  accessKeyId: process.env.ID,
  secretAccessKey: process.env.PASS,
})
const uploadFile = (fileName) => {
  const fileContent = fs.readFileSync(fileName)
  const params = {
    Bucket: BUCKET_NAME,
    key: fileName, // 업로드할 파일 이름
    Body: fileContent, // 파일 원본
  }

  //

  s3.upload(params, function (err, data) {
    if (err) {
      throw err
    }
    console.log(`File uploaded successfully,${data.Location}`) // 얘가 링크니까 얘를 db에 저장
  })
}

uploadFile("./uploads/test.txt")
