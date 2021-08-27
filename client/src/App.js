import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import axios from "axios";

import Login from "./Components/Login";
import Main from "./Components/Main";
import MyContents from "./Components/MyContents";
import MyPage from "./Components/MyPage";
import SignUp from "./Components/SignUp";
import ContentModiCreate from "./Components/ContentsModiCreate";
import Content from "./Components/Content";
import {
  dummyMainPosts,
  dummyContents,
  dummyComment,
} from "./dummyData/dummyData";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [contents, setContents] = useState([]);
  const [selectedContent, setSelectedContent] = useState({
    id: "",
    title: "",
    image: "",
    contents: "",
    likecount: "",
    unlikecount: "",
  });
  const [userInfo, setUserInfo] = useState({
    id: "",
    login_id: "",
    image: "",
    nickname: "",
  });

  useEffect(() => {
    axios
      .post("https://takecareofmycloset/getposts")
      .then((res) => {
        contentsListHandler([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getUserInfo = (userInfo) => {
    setUserInfo({
      id: userInfo.id,
      login_id: userInfo.login_id,
      image: userInfo.image,
      nickname: userInfo.nickname,
    });
  };

  const loginHandler = (accessToken) => {
    setIsLogin(true);
    setAccessToken(accessToken);
    getUserInfo();
  };

  const logoutHandler = () => {
    setIsLogin(false);
    setAccessToken("");
    setUserInfo({
      id: "",
      login_id: "",
      image: "",
      nickname: "",
    });
  };

  const ChangeLoginState = (boolean) => {
    setIsLogin(boolean);
  };

  const contentsListHandler = (contentsList) => {
    setContents(contentsList);
  };

  const handleContentClick = (id) => {
    console.log("게시글을 클릭했군요!");
    console.log(id);
    // let temp = contents.filter((el) => {
    //   return el.id === id;
    // });
    let temp;
    for (let el of contents) {
      if (el.id === id) {
        temp = el.id;
      }
    }
    setSelectedContent({
      id: temp,
      title: selectedContent.title,
      image: selectedContent.image,
      contents: selectedContent.contents,
      likecount: selectedContent.likecount,
      unlikecount: selectedContent.unlikecount,
    });
  };

  let loca = useLocation();

  console.log("로케이션 제발", loca);

  return (
    // <div>
    //   <Content />
    // </div>
    <React.Fragment>
      {loca.pathname === "/login" || loca.pathname === "/signup" ? (
        <></>
      ) : (
        <Nav
          isLogin={isLogin}
          ChangeLoginState={ChangeLoginState}
          logoutHandler={logoutHandler}
        />
      )}
      <section>
        <Switch>
          <Route exact path="/">
            <Main contents={contents} handleContentClick={handleContentClick} />
          </Route>
          <Route path="/login">
            <Login loginHandler={loginHandler} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/mycontents">
            <MyContents isLogin={isLogin} userInfo={userInfo} />
          </Route>
          <Route path="/mypage">
            <MyPage isLogin={isLogin} />
          </Route>
          <Route path="/content">
            <Content
              isLogin={isLogin}
              userInfo={userInfo}
              accessToken={accessToken}
              selectedContent={selectedContent}
            />
          </Route>
          <Route path="/content-modi-create">
            <ContentModiCreate isLogin={isLogin} userInfo={userInfo} />
          </Route>
        </Switch>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default App;
