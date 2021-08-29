import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import logo from "../image/logo.jpeg"
import axios from "axios"

function Login({ ChangeLogin }) {
  const [loginInfo, setLoginInfo] = useState({
    login_id: "",
    password: "",
  })

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
        .post("https://TakeCareOfMyCloset/login", loginInfo, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.message === "Invalid user or Wrong password") {
            setErrorMessage("아이디와 비밀번호가 일치하지 않습니다.")
          } else {
            setErrorMessage("")
            ChangeLogin(true)
            history.push("/")
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
      <h1>
        <img src={logo} alt="logo" width="500" />
      </h1>
      <h2>로그인</h2>
      <form styled="border: 0">
        <fieldset>
          <legend>로그인 폼</legend>
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
          <span>{errorMessage}</span>
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
            <button>소셜 로그인</button>
          <input type="checkbox"></input> 로그인 상태 유지
        </fieldset>
      </form>
    </div>
  )
}

export default Login
