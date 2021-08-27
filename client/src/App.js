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

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [contents, setContents] = useState([]);
  const [userInfo, setUserInfo] = useState({
    login_id: "",
    image: "",
    nickname: "",
  });

  useEffect(() => {
    console.log("asdasdasd");
    axios.get("https://takecareofmycloset/getposts").then((res) => {
      contentsListHandler([...res.data]);
    });
  }, []);

  const getUserInfo = (userInfo) => {
    setUserInfo({
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

  let loca = useLocation();

  console.log("로케이션 제발", loca);

  return (
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
            <Main contents={contents} />
          </Route>
          <Route path="/login">
            <Login loginHandler={loginHandler} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/mycontents">
            <MyContents contents={contents} userInfo={userInfo} />
          </Route>
          <Route path="/mypage">
            <MyPage isLogin={isLogin} />
          </Route>
          <Route path="/content">
            <Content
              isLogin={isLogin}
              userInfo={userInfo}
              accessToken={accessToken}
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
