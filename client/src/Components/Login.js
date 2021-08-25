import React, { useState } from "react"
import logo from "../image/logo.jpeg"
import axios from "axios"

function Login () {

    const [loginInfo, setLoginInfo] = useState({
        login_id: "",
        password: ""
    })

    console.log(loginInfo.password)


    const handleInputValue = (key) => (e) => {
        setLoginInfo({ ...loginInfo, [key]: e.target.value })
      }


    const handleLogin = () => {
        axios.post("https://TakeCareOfMyCloset/login", loginInfo, {
          withCredentials: true
        })
        .then(res => {
            console.log('성공')
        }).catch((err) => console.error(err))

    }

    return (
        <div>
            <h1>
                <img src={logo} alt="logo" width="500"/>
            </h1>
            <h2>로그인</h2>
                <form styled="border: 0">
                    <fieldset>
                    <input type="text" placeholder="아이디" onChange={handleInputValue("login_id")}/>
                    <input type="password" placeholder="비밀번호" onChange={handleInputValue("password")}/>
                    <div>
                    <button type="submit" onClick={handleLogin}>로그인</button>
                    <button>회원가입</button>
                    </div>
                    
                    <input type="checkbox"></input> 로그인 상태 유지
                    <div><button>소셜 로그인</button></div>
                    </fieldset>
                    
                </form>
        </div>
    )

}





export default Login;