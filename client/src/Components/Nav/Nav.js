<<<<<<< HEAD:client/src/Components/Nav.js
import React, { useState } from "react";
=======
import React , {useState} from 'react';
>>>>>>> ed8cf19c95f8cfa9e19baa9d0bb7166ffc85857d:client/src/Components/Nav/Nav.js
import { Link, useHistory } from "react-router-dom";
import logo from "../../image/LOGO.png";
import User from "../User";
import {NavContainer, Logo, Navigation, NavBtn} from './NavStyled'

function Nav({  logoutHandler }) {

<<<<<<< HEAD:client/src/Components/Nav.js
function Nav({ isLogin, logoutHandler, selectedContent, setSelectedContent }) {
=======
>>>>>>> ed8cf19c95f8cfa9e19baa9d0bb7166ffc85857d:client/src/Components/Nav/Nav.js
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
    // setNewContentBtnOn(true)
    // console.log(newContentBtnOn);
    // setSelectedContent({
    //   id: '',
    //   userId: '',
    //   title: '',
    //   image:'',
    //   contents: '',
    //   likecount: '',
    //   unlikecount: ''
    // }, sendData())
    history.push({
      pathname: "/content-modi-create",
      state: { newContent },
    });
  };

  // const sendData = () =>{
  //   history.push({
  //     pathname :'/content-modi-create',
  //     state: {selectedContent : selectedContent}
  //   })
  // }
  // const createContent = async (e) => {
  //   e.preventDefault()
  //   // setNewContentBtnOn(true)
  //   // console.log(newContentBtnOn);
  //   setSelectedContent({
  //     id: '',
  //     userId: '',
  //     title: '',
  //     image:'',
  //     contents: '',
  //     likecount: '',
  //     unlikecount: ''
  //   }, () => {history.push({
  //     pathname :'/content-modi-create',
  //     state: {selectedContent : selectedContent}
  // })})

  // }

  return (
    <NavContainer>
      <header className="appHeader">
        <h1>
          <Link to="/">
            <Logo src={logo} alt="img-thumbnail"/>
          </Link>
        </h1>
      </header>

      <Navigation>

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
        {/* <Link to="/content-modi-create"> */}
<<<<<<< HEAD:client/src/Components/Nav.js
        <button onClick={(e) => createContent(e)}>새 글 작성</button>
=======
        <NavBtn onClick={(e) =>createContent(e)}>새 글 작성</NavBtn>
>>>>>>> ed8cf19c95f8cfa9e19baa9d0bb7166ffc85857d:client/src/Components/Nav/Nav.js
        {/* </Link> */}
        <NavBtn>
        <User logoutHandler={logoutHandler} />
        </NavBtn>
        <Link to="/login">
          <NavBtn>로그인</NavBtn>
        </Link>
      </Navigation>
      </NavContainer>
  );
}

export default Nav;

