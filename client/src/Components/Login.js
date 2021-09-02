import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../image/logo.jpeg";
import { Cookies } from "react-cookie";
import axios from "axios";

import { A11yHidden, Legend } from "../Styled/Common";
import {Logo} from '../Styled/NavStyled'
import {LoginForm, LoginFieldset, LoginInput, LoginBtn, LoginBtns} from '../Styled/LoginStyled'

import './login.css'
import '../Styled/Common.css'



axios.defaults.withCredentials = true;

const cookies = new Cookies();

function Login({ getUserInfo }) {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const inputIdHandler = (e) => {
    e.preventDefault();
    setInputId(e.target.value);
  };

  const inputPwHandler = (e) => {
    e.preventDefault();
    setInputPw(e.target.value);
  };

  // const handleInputValue = (key) => (e) => {
  //   setLoginInfo({ ...loginInfo, [key]: e.target.value });
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    // setErrorMessage("아이디와 비밀번호가 일치하지 않습니다.")
    if (inputId && inputPw) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/login`, {
          login_id: inputId,
          password: inputPw,
        })
        .then((res) => {
          console.log(
            "로그인 요청 후 받은 액세스 토큰",
            cookies.get("accessToken")
          );
          const accessToken = cookies.get("accessToken");
          // console.log(accessToken);

          if (res.data.message === "not authorized") {
            setErrorMessage("아이디와 비밀번호가 일치하지 않습니다.");
          } else {
            setErrorMessage("");
            getUserInfo(accessToken);
            history.push("/");
          }
        })
        .catch((err) => console.error(err));
    } else {
      setErrorMessage("아이디와 비밀번호를 입력해주세요");
    }
  };

  const goToSignUp = (e) => {
    e.preventDefault();

    history.push("/signup");
  };

  return (
    <div class="login">
      <h1>
        <Logo src={logo} />
      </h1>
      <A11yHidden>로그인</A11yHidden>
      <LoginForm>
        <LoginFieldset>
          <Legend>로그인 폼</Legend>
          <LoginInput
            type="text"
            placeholder="아이디"
            onChange={(e) => inputIdHandler(e)}
          />
          <LoginInput
            type="password"
            placeholder="비밀번호"
            onChange={(e) => inputPwHandler(e)}
          />
          <span>{errorMessage}</span>
          <LoginBtns>
            <LoginBtn type="submit" onClick={(e) => handleLogin(e)}>
              로그인
            </LoginBtn>
            <LoginBtn onClick={(e) => goToSignUp(e)}>회원가입</LoginBtn>
          </LoginBtns>
        </LoginFieldset>
      </LoginForm>
    </div>
  );
}

export default Login;
