import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../image/logo.jpeg";

import User from "./User";
import { NavContainer, Logo, Navigation, NavBtn } from "../Styled/NavStyled";

function Nav({ isLogin, logoutHandler, selectedContent, setSelectedContent }) {
  const [newContent, setNewContent] = useState({
    id: "",
    userId: "",
    title: "",
    image: "",
    contents: "",
    likecount: "",
    unlikecount: "",
  });

  const history = useHistory();

  const createContent = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/content-modi-create",
      state: { newContent },
    });
  };

  return (
    <NavContainer>
      <header className="appHeader">
        <h1>
          <Link to="/">
            <Logo src={logo} alt="logo" width="500" />
          </Link>
        </h1>
      </header>
      <Navigation>
        <h2 className="a11yHidden">메인 메뉴</h2>
        {isLogin ? (
          <>
            <NavBtn onClick={(e) => createContent(e)}>새 글 작성</NavBtn>
            <NavBtn>
              <User logoutHandler={logoutHandler} />
            </NavBtn>
          </>
        ) : (
          <>
            <Link to="/login">
              <NavBtn>로그인</NavBtn>
            </Link>
            <Link to="/signup">
              <NavBtn>회원가입</NavBtn>
            </Link>
          </>
        )}
      </Navigation>
    </NavContainer>
  );
}

export default Nav;
