import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Cookies } from "react-cookie";
import { A11yHidden, Legend } from "../Styled/Common";
import { FlexSection } from "../Styled/Flex";
import {
  ContentForm,
  ImageContent,
  FieldSet,
  CreateTitle,
  Section,
  CreateBtn,
  CancelBtn,
  FileAttach,
  CreateTextContent
} from "../Styled/ContentModiCreateStyled";
import { TextContent } from "../Styled/ContentStyled";
import '../Styled/Common.css'

// axios.defaults.withCredentials = true;
const cookies = new Cookies();

function ContentModiCreate({
  userInfo,
  contentsListHandler,
  getUserInfo,
  setSelectedContent,
}) {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [url, setUrl] = useState();

  const [title, setTitle] = useState("");
  const [textContent, setTextContent] = useState("");

  const location = useLocation();
  const history = useHistory();

  const selectedContent = location.state.selectedContent;
  const newContent = location.state.newContent;

  console.log("--------------", selectedContent);
  console.log(">>>>>>>", newContent);

  // <function>

  // image 파일 확장자 유효성 함수
  function validImageType(img) {
    const type = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/bmp",
    ];
    return type.indexOf(img.type) > -1;
    // console.log(result); // true
  }

  // <서버요청>
  const requestSave = (e) => {
    e.preventDefault();
    if (newContent) {
      // 새글 작성 요청
      if (!userInfo) return alert("로그인 후 이용하실 수 있습니다.");
      if (!title) return alert("제목을 입력해주세요.");
      if (!textContent) return alert("내용을 입력해주세요.");
      if (!url) return alert("사진을 등록해주세요");
      axios
        .post(`${process.env.REACT_APP_API_URL}/createpost`, {
          userId: userInfo.id,
          image: url,
          title: title,
          contents: textContent,
        },{withCredentials: true})
        .then((res) => {
          console.log("새글작성 응답", res.data);
          if (res.data.message === "ok") {
            axios
              .post(`${process.env.REACT_APP_API_URL}/getposts`,null,{withCredentials: true})
              .then((res) => {
                console.log("전체게시글 요청 응답", res.data);
                contentsListHandler(res.data.data);
              })
              .catch((err) => {
                console.log(err);
              });
            getUserInfo(cookies.get("accessToken"));
            alert("게시글 작성이 완료되었습니다.");
            history.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // 게시글 수정 요청
      console.log(url, title, textContent);
      axios
        .put(`${process.env.REACT_APP_API_URL}/modifymypost`, {
          id: selectedContent.id,
          image: url || selectedContent.image,
          title: title || selectedContent.title,
          contents: textContent || selectedContent.contents,
        },{withCredentials: true})
        .then((res) => {
          console.log("게시글 수정요청 응답", res.data);
          if (res.data.message === "ok") {
            setSelectedContent(res.data.data.userInfo);
            alert("게시글 수정이 완료되었습니다.");
            history.push("/content");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // <Event>

  // 이미지 등록 이벤트
  const setImageFromFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    // console.log(file);
    /* {name: "logo.jpeg", lastModified: 1629899741611, 
    lastModifiedDate: Wed Aug 25 2021 22:55:41 GMT+0900 
    (한국 표준시), webkitRelativePath: "", size: 385201, …}*/

    if (!validImageType(file)) {
      alert("이미지 파일이 아닙니다. 이미지 파일로 업로드 부탁드립니다.");
      console.log(
        "It is not an image file. Please upload it as an image file."
      );
      return;
    } else {
      console.log("The image file is correct. please continue");
    }

    setImageFile(file);

    let reader = new FileReader(); // -> 파일 읽기 완료

    reader.onload = function () {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append("closet", file);

    axios
      .post(`${process.env.REACT_APP_API_URL}/upload`, formData, {withCredentials: true})
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "ok") {
          setUrl(res.data.image_url);
        } else {
          alert("이미지 업로드에 실패했습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // {
  //   id: "",
  //   userId: "",
  //   title: "",
  //   image: "",
  //   contents: "",
  // }

  // const handleInputValue = (key) => (e) => {
  //   console.log(e.target.value);
  //   setSelectedContent({ ...selectedContent, [key]: e.target.value });
  // };

  return (
    <section className="modi-create-section"  style={{background: "linear-gradient(to right bottom, #f4f4f4, #ecd6a7, #70e1f5)"}}>
      <A11yHidden>컨텐츠 작성 및 수정</A11yHidden>
      <ContentForm
        method="post"
        className="imageUpLoad"
        action="upload"
        encType="multipart/form-data">
        <FieldSet>
          <Legend>컨텐츠 업로드 폼</Legend>
          {/* newContent 가 ? true 명 데이터가 잇는 것임 : 새글임*/}
          {newContent === undefined ? (
            <>
              <ImageContent src={url || selectedContent.image} />
              {/* <img src={selectedContent.image} alt="dd"/> */}
              <Section>
                <CreateTitle
                  defaultValue={title || selectedContent.title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {/* <CreateTitle defaultValue={selectedContent.title} /> */}
                {/* <div className="textContent"> */}
                {/* <input placeholder="상의: S / M / L / XL & 하의: S / M / L /XL" /> */}
                <CreateTextContent
                  // autoComplete={false}
                  style={{ height: "500px" }}
                  cols="30"
                  rows="10"
                  defaultValue={textContent || selectedContent.contents}
                  onChange={(e) => setTextContent(e.target.value)}
                />
                {/* <TextContent onChange={(e) => setTextContent(e.target.value)}>{textContent || selectedContent.contents}</TextContent> */}
                {/* </div> */}
                <FileAttach for="input-file">이미지 업로드</FileAttach>
                <input
                  type="file"
                  name="imgFile"
                  id="input-file"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    setImageFromFile(e);
                  }}
                />
              </Section>
            </>
          ) : (
            <>
              <ImageContent src={imageUrl} />
              <Section>
                <CreateTitle
                  placeholder="제목을 입력하세요."
                  defaultValue={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <CreateTextContent
                  style={{ height: "500px" }}
                  placeholder="상의: S / M / L / XL & 하의: S / M / L /XL"
                  defaultValue={textContent}
                  cols="30"
                  rows="10"
                  onKeyUp={(e) => setTextContent(e.target.value)}
                ></CreateTextContent>
                <FileAttach for="input-file">이미지 업로드</FileAttach>
                <input
                  style={{ display: "none" }}
                  type="file"
                  name="imgFile"
                  id="input-file"
                  value=""
                  onChange={(e) => {
                    setImageFromFile(e);
                  }}
                />
              </Section>
            </>
          )}
          <CreateBtn onClick={(e) => requestSave(e)}>등록</CreateBtn>
          <Link to="/">
            <CancelBtn>취소</CancelBtn>
          </Link>
        </FieldSet>
      </ContentForm>
    </section>
  );
}

export default ContentModiCreate;