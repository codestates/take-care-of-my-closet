import React from "react"
import { Link } from "react-router-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import logo from "../image/logo.jpeg"
import "./Nav.css"

function Nav({ isLogin, ChangeLoginState }) {
  return (
    <header>
      <h1 className="logo">
        <Link to="/">
          <img src={logo} alt="logo" width="500" />
        </Link>
      </h1>
      <nav>
        {isLogin ? (
          <div>
            <button>새 글 작성</button>
            <div>
              <ul>
                유저
                <Link to="/mycontents">
                  <li>My Contents</li>
                </Link>
                <Link to="/mypage">
                  <li>My page</li>
                </Link>
                <Link to="/">
                  <li onClick={() => ChangeLoginState(false)}>로그아웃</li>
                </Link>
              </ul>
            </div>
          </div>
        ) : (
          <button>로그인</button>
        )}
      </nav>
    </header>
  )
}

export default Nav
