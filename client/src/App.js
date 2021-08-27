import "./App.css";
import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

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
  const [userInfo, setUserInfo] = useState({
    login_id: "",
    image: "",
    nickname: "",
  });

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

  let loca = useLocation();

  console.log("로케이션 제발", loca);

  return (
    <React.Fragment>
      {/* <div> */}
      {loca.pathname === "/login" || loca.pathname === "/signup" ? (
        <></>
      ) : (
        <Nav isLogin={isLogin} ChangeLoginState={ChangeLoginState} />
      )}
      <section>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/login">
            <Login loginHandler={loginHandler} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/mycontents">
            <MyContents isLogin={isLogin} />
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
        </Switch>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default App;
