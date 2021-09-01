import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../image/logo.jpeg";

import User from "./User";
import { NavContainer, NavHeader, Logo, Navigation, NavBtn } from "../Styled/NavStyled";
import { A11yHidden } from "../Styled/Common";
// import { FlexNavBtn } from "../Styled/Flex";


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
      <NavHeader>
        <h1 style={{margin:0}}>
          <Link to="/">
            <Logo src={logo}/>
          </Link>
        </h1>
        <Navigation>
          <A11yHidden>메인 메뉴</A11yHidden>
          {isLogin ? (
            <>
              <NavBtn onClick={(e) => createContent(e)}>새 글 작성</NavBtn>
              <NavBtn>
              <User logoutHandler={logoutHandler} />
              </NavBtn>
            </>
        ) : (
            <Link to="/login">
              <NavBtn style={{width:"80px"}}>로그인</NavBtn>
            </Link>
             <Link to="/signup">
              <NavBtn>회원가입</NavBtn>
            </Link>
        )}
      </Navigation>
    </NavContainer>
  );
}

export default Nav;
