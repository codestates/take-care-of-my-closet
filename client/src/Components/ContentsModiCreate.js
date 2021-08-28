import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "./reset.css";
import "./ContentModiCreate.css";

function ContentModiCreate() {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const location = useLocation();
  const selectedContent = location.state.selectedContent;
  console.log("--------------", selectedContent);

  function validImageType(img) {
    const type = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/bmp",
    ];
    const result = type.indexOf(img.type) > -1;
    console.log(result); // true
  }

  const setImageFromFile = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    /* {name: "logo.jpeg", lastModified: 1629899741611, 
    lastModifiedDate: Wed Aug 25 2021 22:55:41 GMT+0900 
    (한국 표준시), webkitRelativePath: "", size: 385201, …}*/

    if (!validImageType(file)) {
      console.log("The image file is correct. please continue");
    } else {
      alert("이미지 파일이 아니다. 이미지 파일로 업로드 부탁드립니다.");
      console.log(
        "It is not an image file. Please upload it as an image file."
      );
    }

    setImageFile(file);

    let reader = new FileReader(); // -> 파일 읽기 완료

    reader.onload = function () {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <main>
      <h2 className="a11yHidden">컨텐츠 작성 및 수정</h2>
      <form
        method="post"
        className="imageUpLoad"
        action="upload"
        encType="multipart/form-data"
      >
        <fieldset>
          <legend>컨텐츠 업로드 폼</legend>
          {/* <div className="imageContent"> */}
          <img className="imageContent" src={imageUrl} alt={imageFile} />
          {/* </div> */}
          <input
            type="file"
            name="imgFile"
            id="imgFile"
            onChange={(e) => {
              setImageFromFile(e);
            }}
          />
          <input className="title" placeholder="제목을 입력해주세요"></input>
          <div className="textContent">
            <input placeholder="상의: S / M / L / XL & 하의: S / M / L /XL"></input>
            <textarea></textarea>
          </div>
          <button>등록</button>
        </fieldset>
      </form>
      <Link to="/">
        <button>취소</button>
      </Link>
    </main>
  );
}

export default ContentModiCreate;
