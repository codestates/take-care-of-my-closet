import React from "react"
import { Link } from "react-router-dom"
import logo from "../image/logo.jpeg"
import "./Nav.css"
import "./reset.css"
import User from './User'

function Nav({ isLogin, ChangeLoginState }) {

  return (
    <header>
      <h1 className="logo">
        <Link to="/">
          <img src={logo} alt="logo" width="500" />
        </Link>
      </h1>
      <nav>
        <h2 className="a11yHidden">메인 메뉴</h2>
        {/* {isLogin ? (
          <>
          <Link to="/content-modify-create">
          <button>새 글 작성</button>
          </Link>
          <ul>
            <User ChangeLoginState={ChangeLoginState}/>
          </ul>
          </>
          ) : (
            <button>로그인</button>
          )} */}
          <Link to="/content-modify-create">
            <button>새 글 작성</button>
          </Link>
          <ul>
            <User ChangeLoginState={ChangeLoginState}/>
          </ul>
          <button>로그인</button>
      </nav>
    </header>
  )
}

export default Nav
