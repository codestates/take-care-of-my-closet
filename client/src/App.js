import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { Cookies } from "react-cookie";
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
import LoadingIndicator from "./Components/LoadingIndicator";
import {
  dummyMainPosts,
  dummyContents,
  dummyComment,
} from "./dummyData/dummyData";

axios.defaults.withCredentials = true;
const cookies = new Cookies();

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [contents, setContents] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [selectedContent, setSelectedContent] = useState({
    id: dummyContents[0].id,
    userId: dummyContents[0].userId,
    title: dummyContents[0].title,
    image: dummyContents[0].image,
    contents: dummyContents[0].contents,
  });
  const [likeCount, setLikeCount] = useState(dummyContents[0].likecount);
  const [unlikeCount, setUnlikeCount] = useState(dummyContents[0].unlikecount);
  const [replyList, setReplyList] = useState(dummyComment);
  // 로컬스토리지에 토큰이 있냐?
  // localStorage.setItem('token', 토큰값)
  // localStorage.removeItem
  // localStorage.getItem()
  const [userInfo, setUserInfo] = useState({
    id: "",
    login_id: "",
    image: "",
    nickname: "",
  });

  let loca = useLocation();
  const history = useHistory();

  useEffect(() => {
    setIsloading(true);
    axios
      .post("http://localhost:4000/getposts")
      .then((res) => {
        console.log("전체게시글 요청 응답", res.data);
        contentsListHandler(res.data.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(userInfo);
    console.log(isLogin);
  }, []);
  console.log("받아온 컨텐츠 정보", contents);

  // accessToken 보내는 요청 함수 만들자.

  const getUserInfo = (accessToken) => {
    axios
      .get("http://localhost:4000/accessTokenrequest", {
        headers: {
          accessToken: accessToken,
        },
      })
      .then((res) => {
        console.log("유저 정보 요청 응답", res.data.data);
        if (res.data.message === "invalid access token") {
          setIsLogin(false);
          console.log("토큰이 유효하지 않습니다.");
        } else {
          setIsLogin(true);
          setUserInfo({
            id: res.data.data.userInfo.id,
            login_id: res.data.data.userInfo.login_id,
            image: res.data.data.userInfo.user_image,
            nickname: res.data.data.userInfo.nickname,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const refreshTokenRequest = (refreshToken) => {
    axios
      .get("http://localhost:4000/refreshTokenrequest", {
        headers: {
          refreshToken: refreshToken,
        },
      })
      .then((res) => {
        console.log(
          "리프레시토큰 요청후 받은 새 액세스 토큰",
          cookies.get("accessToken")
        );
        // 새로 발급받은 액세스 토큰이 옴
        if (res.data.message === "ok") {
          const accessToken = cookies.get("accessToken");
          getUserInfo(accessToken);
        } else {
          // 리프레시 토큰마저 만료된 경우
          console.log("로그인이 필요합니다.");
          setIsLogin(false);
          history.push("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logoutHandler = () => {
    // 액세스 토큰 지우는 메소드 구현?
    setIsLogin(false);
    setUserInfo({
      id: "",
      login_id: "",
      image: "",
      nickname: "",
    });
  };

  const contentsListHandler = (contentsList) => {
    setContents(contentsList);
  };

  const getSelectedContent = (id) => {
    axios
      .post("http://localhost:4000/getContents", {
        postId: id,
      })
      .then((res) => {
        console.log("게시글 클릭시 오는 응답", res.data);
        // 응답으로 클릭한 게시글 정보 + 해당 게시글의 댓글 정보 받음
        if (res.data.message === "ok") {
          setSelectedContent({
            id: res.data.contents.id,
            userId: res.data.contents.userId,
            title: res.data.contents.title,
            image: res.data.contents.image,
            contents: res.data.contents.contents,
          });
          setLikeCount(res.data.likeCount);
          setUnlikeCount(res.data.unlikecount);
          setReplyList(res.data.contents.comments);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // 더미데이터로 구현
    // setSelectedContent({
    //   id: dummyContents[0].id,
    //   userId: dummyContents[0].userId,
    //   title: dummyContents[0].title,
    //   image: dummyContents[0].image,
    //   contents: dummyContents[0].contents,
    //   likecount: dummyContents[0].likecount,
    //   unlikecount: dummyContents[0].unlikecount,
    // });
    // setReplyList(dummyComment);
  };

  const handleContentClick = (id) => {
    console.log("게시글을 클릭했군요!");
    console.log(id);
    getSelectedContent(id);
  };

  const replyListHandler = (list) => {
    setReplyList(list);
  };

  return (
    <React.Fragment>
      {loca.pathname === "/login" || loca.pathname === "/signup" ? (
        <></>
      ) : (
        <Nav
          isLogin={isLogin}
          logoutHandler={logoutHandler}
          selectedContent={selectedContent}
          setSelectedContent={setSelectedContent}
        />
      )}
      <section>
        <Switch>
          <Route exact path="/">
            {isLoading ? (
              <LoadingIndicator />
            ) : (
              <Main
                contents={contents}
                handleContentClick={handleContentClick}
              />
            )}
            {/* <Main contents={contents} handleContentClick={handleContentClick} /> */}
          </Route>
          <Route path="/login">
            <Login getUserInfo={getUserInfo} />
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
            <MyPage isLogin={isLogin} userInfo={userInfo} />
          </Route>
          <Route path="/content">
            <Content
              isLogin={isLogin}
              userInfo={userInfo}
              selectedContent={selectedContent}
              likeCount={likeCount}
              setLikeCount={setLikeCount}
              unlikeCount={unlikeCount}
              setUnlikeCount={setUnlikeCount}
              replyList={replyList}
              replyListHandler={replyListHandler}
            />
          </Route>
          <Route path="/content-modi-create">
            <ContentModiCreate
              isLogin={isLogin}
              userInfo={userInfo}
              selectedContent={selectedContent}
            />
          </Route>
        </Switch>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default App;
