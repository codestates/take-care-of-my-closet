import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../image/logo.jpeg";
import "./Nav.css";
import "./reset.css";
import User from "./User";

function Nav({ isLogin, logoutHandler, selectedContent, setSelectedContent }) {
 
  const [newContent, setNewContent] = useState({
    id: '',
      userId: '',
      title: '',
      image:'',
      contents: '',
      likecount: '',
      unlikecount: ''
  })

  const history = useHistory()

  const createContent =  (e) => {
    e.preventDefault()
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
      pathname :'/content-modi-create',
      state: {newContent}
    })
  }

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
        {/* <Link to="/content-modi-create"> */}
          <button onClick={(e) =>createContent(e)}>새 글 작성</button>
        {/* </Link> */}
        <ul>
          <User logoutHandler={logoutHandler} />
        </ul>
        <Link to="/login">
          <button>로그인</button>
        </Link>
      </nav>
    </header>
  );
}

export default Nav;
