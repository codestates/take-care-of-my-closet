import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import logo from "../image/logo.jpeg";

function SignUp() {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [nickName, setNickName] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [profileUrl, setProfileUrl] = useState(null);
  const [matchPwValue, setMatchPwValue] = useState("");
  const [validIdLength, setValidIdLength] = useState(true);
  const [validPwLength, setValidPwLength] = useState(false);
  const [duplicatedId, setDuplicatedId] = useState(false);
  const [duplicatedNick, setDuplicatedNick] = useState(false);
  const [pwMatch, setPwMatch] = useState(true);
  const [validIdMessage, setValidIdMessage] = useState("");
  const [duplicatedIdMessage, setDuplicatedIdMessage] = useState("");
  const [duplicatedNickMessage, setDuplicatedNickMessage] = useState("");

  useEffect(() => {
    isValidPassword();
    isMatch();
    isValidId();
  }, [
    idValue,
    pwValue,
    matchPwValue,
    pwMatch,
    validIdLength,
    validIdMessage,
    profileImage,
  ]);
  // console.log(profileImage);
  const history = useHistory();

  const inputIdHandler = (e) => {
    setIdValue(e.target.value);
  };

  const inputPwHandler = (e) => {
    setPwValue(e.target.value);
  };

  const inputMatchPwHandler = (e) => {
    setMatchPwValue(e.target.value);
  };

  const inputProfileHandler = (e) => {
    // console.log(e.target.files[0]);
    setProfileImage(e.target.files[0]);
    // console.log(profileImage);
    let reader = new FileReader(); // -> 파일 읽기 완료

    reader.onload = function () {
      setProfileUrl(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const inputNickNameHandler = (e) => {
    setNickName(e.target.value);
  };

  const isDuplicatedId = (e) => {
    e.preventDefault();
    if (idValue.length < 4) {
      return alert("아이디는 네 글자 이상이어야 합니다.");
    }
    axios
      .post(
        "http://localhost:4000/duplicate",
        {
          login_id: idValue,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        if (res.data.message === `It's already created`) {
          setDuplicatedId(false);
          setDuplicatedIdMessage("사용할 수 없는 아이디 입니다.");
        } else if (res.data.message === "ok") {
          setDuplicatedId(true);
          setDuplicatedIdMessage("사용할 수 있는 아이디 입니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isDuplicatedNick = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:4000/duplicate",
        {
          nickname: nickName,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        if (res.data.message === `It's already created`) {
          setDuplicatedNick(false);
          setDuplicatedNickMessage("사용할 수 없는 닉네임 입니다.");
        } else if (res.data.message === "ok") {
          setDuplicatedNick(true);
          setDuplicatedNickMessage("사용 가능한 닉네임 입니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isValidId = () => {
    if (idValue.length >= 4) {
      setValidIdLength(true);
    } else {
      setValidIdLength(false);
      setValidIdMessage("아이디는 네 글자 이상이어야 합니다.");
    }
  };

  const isValidPassword = () => {
    if (pwValue.length >= 8 && pwValue.length <= 16) {
      setValidPwLength(true);
    } else if (pwValue.length < 8 || pwValue.length > 16) {
      setValidPwLength(false);
    }
  };

  const isMatch = () => {
    if (pwValue === matchPwValue) {
      setPwMatch(true);
    } else {
      setPwMatch(false);
    }
  };

  const requestSignUp = (e) => {
    e.preventDefault();

    if (!idValue || !pwValue || !nickName) {
      return alert("아이디, 비밀번호, 닉네임을 입력하세요");
    }
    if (duplicatedId === false) {
      return alert("아이디가 유효하지 않습니다.");
    }
    if (validPwLength === false) {
      return alert("비밀번호가 유효하지 않습니다.");
    }
    if (pwMatch === false) {
      return alert("비밀번호가 일치하지 않습니다.");
    }
    if (duplicatedNick === false) {
      return alert("닉네임이 유효하지 않습니다.");
    }

    axios
      .post(
        "http://localhost:4000/signup",
        {
          login_id: idValue,
          password: pwValue,
          nickname: nickName,
          user_image: profileUrl,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.message);
        if (res.message === "ok") {
          alert("가입이 완료되었습니다.");
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>
        <img src={logo} alt="logo" width="500px" />
      </h1>
      <h2>회원가입</h2>
      <form>
        <fieldset>
          <legend>회원가입 폼</legend>
          <label>아이디 : </label>
          <input
            type="text"
            onChange={(e) => inputIdHandler(e)}
            value={idValue}
            placeholder="아이디를 입력하세요"
          />
          <button onClick={(e) => isDuplicatedId(e)}>중복확인</button>
          {duplicatedIdMessage ? duplicatedIdMessage : null}
          {validIdLength ? null : validIdMessage}
          <label>비밀번호 : </label>
          <input
            type="password"
            onChange={(e) => inputPwHandler(e)}
            value={pwValue}
            placeholder="비밀번호를 입력하세요"
          />
          {validPwLength ? null : (
            <span>비밀번호는 8자 이상 16자 이하여야 합니다.</span>
          )}
          <label>비밀번호 확인 : </label>
          <input
            type="password"
            onChange={(e) => inputMatchPwHandler(e)}
            placeholder="비밀번호 확인"
          />
          {pwMatch ? null : <span>비밀번호가 일치하지 않습니다.</span>}
          <label>프로필 사진 첨부 : </label>
          <input
            type="file"
            name="user_image"
            accept=".jpg, .jpeg, .png, .gif, .bmp"
            onChange={(e) => inputProfileHandler(e)}
          />
          <img src={profileUrl} alt="img-thumbnail" />
          <label>닉네임 : </label>
          <input
            type="text"
            onChange={(e) => inputNickNameHandler(e)}
            placeholder="닉네임을 입력하세요"
          />
          <button onClick={(e) => isDuplicatedNick(e)}>중복확인</button>
          {duplicatedNickMessage ? <span>{duplicatedNickMessage}</span> : null}
          <button onClick={(e) => requestSignUp(e)}>가입하기</button>
        </fieldset>
      </form>
    </div>
  );
}

export default SignUp;
