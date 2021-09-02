import React, { useState } from "react";
import axios from "axios";
import "./MyPage.css";
import { useHistory } from "react-router-dom";

axios.defaults.withCredentials = true;

function MyPage({ isLogin, userInfo, setUserInfo }) {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");
  const [url, setUrl] = useState("");

  const [nickNameClassNameOn, setNickNameClassNameOn] = useState("");
  const [classNameOn, setClassNameOn] = useState("hide");

  console.log("url", url);
  const history = useHistory();

  // <function>

  // image 파일 확장자 유효성 함수
  function validImageType(img) {
    // console.log(img.type); // image/png
    const type = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/bmp",
    ];
    return type.indexOf(img.type) > -1; // true or false
  }

  // 비밀번호 유효성 검사 함수
  function validationPw(value) {
    // console.log(`비밀번호 길이 ${value.length}`); // 비밀번호 길이
    return (value.length >= 8) & (value.length <= 16);
  }

  // 클래스네임 붙이는 함수
  function classNaming(value) {
    if (validationPw(value)) {
      // 여기로 넘어오게 되면 비밀번호 유효성 검사가 통과 된것이다.
      setClassNameOn("hide");
    } else {
      // 그게 아니면 비밀번호 유효성 검사가 실패한것이다.
      setClassNameOn("check");
    }
  }

  // 비밀번호 확인 함수
  function pwIsMatch(secondPw) {
    console.log(password, secondPw);
    return password === secondPw;
  }

  // <서버 요청>
  // 닉네임 수정 요청
  function nickNameDuplicated(e) {
    e.preventDefault();
    if (!nickName) return;
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/duplicate`,
        {
          nickname: nickName,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.status === 409) {
          // 닉네임 중복
          setNickNameClassNameOn("check");
        } else {
          // 닉네임 중복 아님
          setNickNameClassNameOn("hide");
        }
      });
  }

  // 저장 요청
  function requestSave(e) {
    e.preventDefault();

    // 이미지 아이디 비밀번호 닉네임 서버에 요청
    if (!password && !url && !nickName) return alert("수정 정보를 입력하세요.");
    axios
      .put(`${process.env.REACT_APP_API_URL}/modifyuserinfo`, {
        login_id: userInfo.login_id,
        password: password || null,
        image: url || userInfo.image,
        nickname: nickName || userInfo.nickname,
      })
      .then((res) => {
        console.log("회원정보 수정 요청 응답", res.data);
        if (res.data.message === "ok") {
          // accessToken
          setUserInfo({
            id: res.data.data.userInfo.id,
            login_id: res.data.data.userInfo.login_id,
            image: res.data.data.userInfo.user_image,
            nickname: res.data.data.userInfo.nickname,
          });
          alert("회원정보 수정이 완료되었습니다.");
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // <Event>

  // image 등록 이벤트
  const setImageFromFile = (e) => {
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
      .post(`${process.env.REACT_APP_API_URL}/upload`, formData)
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

  // 유효성 검사 이벤트
  // - 첫번째 비밀번호 onChange 이벤트
  function passwordChecking1(e) {
    setPassword(e.target.value); // 비밀번호 바뀌었음
    validationPw(e.target.value); // 비밀번호 유효성 검사 함수
    classNaming(e.target.value);
  }

  // - 두번째 비밀번호 onChange 이벤트
  function passwordChecking2(e) {
    if (!pwIsMatch(e.target.value)) {
      // 여기로 넘어오면 중복되는 것이다.
      setClassNameOn("check");
    } else {
      // 여기로 넘어오면 중복되지 않는 것이다.
      setClassNameOn("hide");
    }
  }

  // 닉네임 수정하는 이벤트
  function nickNameChange(e) {
    // console.log(e.target.value);
    setNickName(e.target.value);
  }

  return (
    <section>
      <h2 className="a11yHidden">회원정보 설정</h2>
      <form
        method="post"
        className="imageUpLoad"
        action="upload"
        encType="multipart/form-data"
      >
        <fieldset>
          <legend>회원정보 설정 폼</legend>
          <img
            className="imageContent"
            src={imageUrl || userInfo.image}
            alt="img-thumbnail"
          />
          <input
            type="file"
            name="imgFile"
            id="imgFile"
            onChange={(e) => {
              setImageFromFile(e);
            }}
          />
          <section>
            <p className="userId">{userInfo.login_id}</p>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={(e) => {
                passwordChecking1(e);
              }}
            />
            <span className={classNameOn}>
              비밀번호는 8자 이상 16자 이하여야 합니다
            </span>
            <input
              type="password"
              placeholder="비밀번호 확인"
              onChange={(e) => {
                passwordChecking2(e);
              }}
            />
            <span className={classNameOn}>비밀번호가 일치하지 않습니다</span>
            {/* <input type="text" placeholder={userInfo.nickname}/> */}
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              onChange={(e) => {
                nickNameChange(e);
              }}
            />
            <span className={nickNameClassNameOn}>
              중복된 닉네임입니다. 다른 닉네임을 입력해주세요.
            </span>
            <button
              onClick={(e) => {
                nickNameDuplicated(e);
              }}
            >
              중복확인
            </button>
          </section>
          <button
            onClick={(e) => {
              requestSave(e);
            }}
          >
            저장
          </button>
        </fieldset>
      </form>
    </section>
  );
}

export default MyPage;
