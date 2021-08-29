import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "./reset.css";
import "./ContentModiCreate.css";

function ContentModiCreate() {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [title, setTitle] = useState('')
  const [textContent, setTextContent] = useState('')
  
  // useEffect(()=> {}
  // ,[selectedContent])

  const location = useLocation();

  // if(!newContentBtnOn){
  //   const selectedContent = location.state.selectedContent;
  //   console.log("--------------", selectedContent);
  // }
  const selectedContent = location.state.selectedContent;
  const newContent = location.state.newContent;

  console.log("--------------", selectedContent);
  console.log(">>>>>>>", newContent);

  // <function>

  // image 파일 확장자 유효성 함수
  function validImageType(img) {
    const type = ["image/jpeg","image/jpg","image/png","image/gif","image/bmp"];
    return type.indexOf(img.type) > -1;
    // console.log(result); // true
  }

  // <서버요청>
  const requestSave = (e) => {
    e.preventDefault()
    axios.put('https://takecareofmycloset/modifymypost', {
      id: selectedContent.userId,
      image : imageUrl,
      title: title,
      contents: textContent
    })
  }

  // <Event>

  // 이미지 등록 이벤트
  const setImageFromFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    /* {name: "logo.jpeg", lastModified: 1629899741611, 
    lastModifiedDate: Wed Aug 25 2021 22:55:41 GMT+0900 
    (한국 표준시), webkitRelativePath: "", size: 385201, …}*/

    if (!validImageType(file)) {
      alert("이미지 파일이 아닙니다. 이미지 파일로 업로드 부탁드립니다.");
      console.log(
        "It is not an image file. Please upload it as an image file."
      );
      return
    } else {
      console.log("The image file is correct. please continue");
    }

    setImageFile(file);

    let reader = new FileReader(); // -> 파일 읽기 완료

    reader.onload = function () {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section>
      <h2 className="a11yHidden">컨텐츠 작성 및 수정</h2>
      <form method="post" className="imageUpLoad" action="upload" encType="multipart/form-data">
        <fieldset>
          <legend>컨텐츠 업로드 폼</legend>
          {/* newContent 가 ? true 명 데이터가 잇는 것임 : 새글임*/}
          {newContent === undefined ? (
              <>
                <div className="imageContent" >
                  <img src={selectedContent.image} alt="img-thumbnail" />
                </div>
                <input type="file" name="imgFile" id="imgFile" onChange={(e) => {setImageFromFile(e);}} />
                <section>
                  <input className="title" defaultValue={selectedContent.title}/>
                  <div className="textContent">
                    <input placeholder="상의: S / M / L / XL & 하의: S / M / L /XL"/>
                    <textarea defaultValue={selectedContent.contents}/>
                  </div>
                </section>
              </>
          )
          : 
          (
            <>
            <div className="imageContent" >
              <img className="imageContent" src={imageUrl} alt="img-thumbnail" />
            </div>
            <input type="file" name="imgFile" defaultValue='' onChange={(e) => {setImageFromFile(e)}} />
            <input className="title" placeholder="제목을 입력해주세요" defaultValue={title} onChange={(e) => setTitle(e.target.value)}/>
            <section>
            <div className="textContent">
              <input defaultValue='' placeholder="상의: S / M / L / XL & 하의: S / M / L /XL"/>
                <textarea defaultValue={textContent} onKeyUp={(e) => setTextContent(e.target.value)}/>
            </div>
          </section>
          </>
          )}
          <button onClick={(e) =>requestSave(e)}>등록</button> 
        </fieldset>
      </form>
      <Link to="/">
        <button>취소</button>
      </Link>
    </section>
  );
}

export default ContentModiCreate;
