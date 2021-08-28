import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
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
  const [contents, setContents] = useState([]);
  const [selectedContent, setSelectedContent] = useState({
    id: dummyContents[0].id,
    userId: dummyContents[0].userId,
    title: dummyContents[0].title,
    image: dummyContents[0].img,
    contents: dummyContents[0].contents,
    likecount: dummyContents[0].likecount,
    unlikecount: dummyContents[0].unlikecount,
  });
  const [replyList, setReplyList] = useState(dummyComment);
  const [userInfo, setUserInfo] = useState({
    id: "",
    login_id: "",
    image: "",
    nickname: "",
  });
  // const [newContentBtnOn,setNewContentBtnOn] = useState(false)


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

  const loginHandler = () => {
    setIsLogin(true);
    getUserInfo();
  };

  const logoutHandler = () => {
    setIsLogin(false);
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

  const getSelectedContent = (id) => {
    // axios
    //   .post(
    //     "https://",
    //     {
    //       postId: id,
    //     },
    //     { withCredentials: true }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     // 응답으로 클릭한 게시글 정보 + 해당 게시글의 댓글 정보 받음
    //     setSelectedContent({
    //       id: res.content.id,
    //       userId: res.content.userId,
    //       title: res.content.title,
    //       image: res.content.image,
    //       contents: res.content.contents,
    //       likecount: res.content.likecount,
    //       unlikecount: res.content.unlikecount,
    //     });
    //     setReplyList(res.comment);
    //   });

    // 더미데이터로 구현
    setSelectedContent({
      id: dummyContents[0].id,
      userId: dummyContents[0].userId,
      title: dummyContents[0].title,
      image: dummyContents[0].image,
      contents: dummyContents[0].contents,
      likecount: dummyContents[0].likecount,
      unlikecount: dummyContents[0].unlikecount,
    });
    setReplyList(dummyComment);
  };

  const handleContentClick = (id) => {
    console.log("게시글을 클릭했군요!");
    console.log(id);
    getSelectedContent(id);
  };

  const replyListHandler = (list) => {
    setReplyList(list);
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
          selectedContent={selectedContent}
          setSelectedContent={setSelectedContent}
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
            <MyContents
              isLogin={isLogin}
              userInfo={userInfo}
              handleContentClick={handleContentClick}
            />
          </Route>
          <Route path="/mypage">
            <MyPage isLogin={isLogin} />
          </Route>
          <Route path="/content">
            <Content
              isLogin={isLogin}
              userInfo={userInfo}
              selectedContent={selectedContent}
              setSelectedContent={setSelectedContent}
              replyList={replyList}
              replyListHandler={replyListHandler}
            />
          </Route>
          <Route path="/content-modi-create">
            <ContentModiCreate isLogin={isLogin} userInfo={userInfo} selectedContent={selectedContent}/>
          </Route>
        </Switch>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default App;
