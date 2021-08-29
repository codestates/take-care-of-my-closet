import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import logo from "../image/logo.jpeg"
import axios from "axios"

function Login({ ChangeLogin }) {
  const [loginInfo, setLoginInfo] = useState({
    login_id: "",
    password: "",
  })

  const [userInfo, setUserInfo] = useState({})

  const [errorMessage, setErrorMessage] = useState("")

  const history = useHistory()

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    // setErrorMessage("아이디와 비밀번호가 일치하지 않습니다.")
    if (loginInfo.login_id && loginInfo.password) {
      axios
        .post("http://localhost:4000/login", loginInfo, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.message === "Invalid user or Wrong password") {
            setErrorMessage("아이디와 비밀번호가 일치하지 않습니다.")
          } else {
            setErrorMessage("")
            axios
              .get("http://localhost:4000/accessTokenrequest", {
                withCredentials: true,
              })
              .then((res) => console.log(res.data))
            // 로컬스토리지 & 쿠키 에 토큰이 있는지 확인후 true
            // ChangeLogin(true)
            // history.push("/")
            setUserInfo({ login: "login", password: "password" })
          }
        })
        .catch((err) => console.error(err))
    } else {
      setErrorMessage("아이디와 비밀번호를 입력해주세요")
    }
  }

  console.log(loginInfo)

  return (
    <div>
      {console.log("제발", userInfo)}
      <h1>
        <img src={logo} alt="logo" width="500" />
      </h1>
      <h2>로그인</h2>
      <form styled="border: 0">
        <fieldset>
          <input
            type="text"
            placeholder="아이디"
            onChange={handleInputValue("login_id")}
          />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={handleInputValue("password")}
          />
          <div>{errorMessage}</div>
          <div>
            <button
              type="submit"
              onClick={(e) => {
                handleLogin(e)
              }}
            >
              로그인
            </button>
            <Link to="/signup">
              <button>회원가입</button>
            </Link>
          </div>
          <input type="checkbox"></input> 로그인 상태 유지
          <div>
            <button>소셜 로그인</button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Login
