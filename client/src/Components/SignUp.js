import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import logo from "../image/logo.jpeg";
import {Logo} from '../Styled/NavStyled'
import { A11yHidden, Legend } from "../Styled/Common";
import {SignUpForm, SignUpFieldset,SignUpInput, PassWordCheck, FileAttachProfile , ProfileImageBox, UserSave, DuplicateBtn} from "../Styled/SignUpStyled";
// import {FileAttach} from "../Styled/ContentModiCreateStyled";


axios.defaults.withCredentials = true;

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

  const [imageUrl, setImageUrl] = useState("");
  const formData = new FormData();

  // console.log("image_url", imageUrl)

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
    console.log(e.target.files[0]);
    setProfileImage(e.target.files[0]);
    // console.log("프로필 사진", profileImage);
    let reader = new FileReader(); // -> 파일 읽기 완료

    reader.onload = function () {
      setProfileUrl(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);

    const img = e.target.files[0];
    formData.append("closet", img);
    // console.log(formData); // FormData {}
    // for (const keyValue of formData) console.log("폼데이터", keyValue); // ["img", File] File은 객체
    axios
      .post(`${process.env.REACT_APP_API_URL}/upload`, formData)
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "ok") {
          setImageUrl(res.data.image_url);
        } else {
          alert("이미지 업로드에 실패했습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
        `${process.env.REACT_APP_API_URL}/duplicate`,
        {
          login_id: idValue,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        if (res.data.message === `It's already created`) {
          // setDuplicatedId(false);
          // setDuplicatedIdMessage("사용할 수 없는 아이디 입니다.");
          return alert("사용할 수 없는 아이디 입니다.")
        } else if (res.data.message === "ok") {
          // setDuplicatedId(true);
          // setDuplicatedIdMessage("사용할 수 있는 아이디 입니다.");
         return alert("사용할 수 있는 아이디 입니다.")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isDuplicatedNick = (e) => {
    e.preventDefault();
    if (!nickName) return alert("닉네임을 입력하세요.");
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/duplicate`,
        {
          nickname: nickName,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        if (res.data.message === "It's already created") {
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
      setValidIdMessage("* 아이디는 네 글자 이상이어야 합니다.");
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
      .post(`${process.env.REACT_APP_API_URL}/signup`, {
        login_id: idValue,
        password: pwValue,
        nickname: nickName,
        user_image: imageUrl,
      })
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message === "create!") {
          alert("가입이 완료되었습니다.");
          history.push("/login");
        } else {
          alert("이미 존재하는 회원입니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div class="sign-up">
      <h1>
<<<<<<< HEAD
        <Link to="/">
          <img src={logo} alt="logo" width="500px" />
=======
    <Link to="/">
        <Logo src={logo}/>
>>>>>>> fbb55996e86982a1bb048542bea50037df815918
        </Link>
      </h1>
      <SignUpForm>
      <h2>회원가입</h2>
        <SignUpFieldset>
          <Legend>회원가입</Legend>
          <div className="id-form">
            <SignUpInput
              type="text"
              onChange={(e) => inputIdHandler(e)}
              value={idValue}
              placeholder="아이디"
            />
            <DuplicateBtn onClick={(e) => isDuplicatedId(e)}>중복확인</DuplicateBtn>
          </div>
          {duplicatedIdMessage ? <p>{duplicatedIdMessage}</p> : null}
          {validIdLength ? null : <p style={{marginLeft:"-100px", marginTop: "-5px",  color: "red"}}>{validIdMessage}</p>}
          <SignUpInput
          style={{marginLeft: "-70px"}}
            type="password"
            onChange={(e) => inputPwHandler(e)}
            value={pwValue}
            placeholder="비밀번호"
          />
          {validPwLength ? null : (
            <p style={{marginLeft:"-50px", marginTop: "-5px", color: "red"}}>* 비밀번호는 8자 이상 16자 이하여야 합니다.</p>
          )}
          <PassWordCheck
          style={{marginLeft: "-60px"}}
            type="password"
            onChange={(e) => inputMatchPwHandler(e)}
            placeholder="비밀번호 확인"
          />
          {pwMatch ? null : <p style={{marginLeft:"-130px", marginTop: "-5px", color: "red"}}>*비밀번호가 일치하지 않습니다.</p>}
          <div className="profile-form">
            <ProfileImageBox src={profileUrl} />
            {/* <img src={profileUrl} alt="img-thumbnail" /> */}
              <div className="efgs">
                <FileAttachProfile for="input-file">이미지 업로드</FileAttachProfile>
                <FileAttachProfile for="input-file">이미지 삭제</FileAttachProfile>
              </div>
              {/* <button>이미지 삭제</button> */}
              {/* <p>프로필 사진을 업로드 해주세요</p> */}
              <input
              style={{ display: "none"}}
              id="input-file"
              type="file"
              name="user_image"
              accept=".jpg, .jpeg, .png, .gif, .bmp"
              onChange={(e) => inputProfileHandler(e)}
              />
          </div>
          {/* <label>닉네임 : </label> */}
          <div className="nickname-form">
            <SignUpInput
            style={{marginLeft: "-60px"}}
              type="text"
              onChange={(e) => inputNickNameHandler(e)}
              placeholder="닉네임"
            />
            <DuplicateBtn onClick={(e) => isDuplicatedNick(e)}>중복확인</DuplicateBtn>
          </div>
          {duplicatedNickMessage ? <span>{duplicatedNickMessage}</span> : null}
          <UserSave onClick={(e) => requestSignUp(e)}>가입하기</UserSave>
        </SignUpFieldset>
      </SignUpForm>
    </div>
  );
}

export default SignUp;