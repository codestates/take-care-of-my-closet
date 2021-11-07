import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import Replys from "./Replys";
// import { Cookies } from "react-cookie";
import styled from 'styled-components'
// import '../image/1111.png'
import '../Styled/Common.css'

import { FlexArticle } from "../Styled/Flex";
import { A11yHidden, Btn } from "../Styled/Common";
import {
  Article,
  ContentImg,
  Section,
  Title,
  TextContent,
  UserMindBtn,
  UserMindBtnLike,
  UserMindBtnDisLike,
  ModifyBtn,
  DeleteBtn,

} from "../Styled/ContentStyled";
import like from "../image/like.png";
import disLike from "../image/bad.png";

import './sss.css'


axios.defaults.withCredentials = true;
// const cookies = new Cookies();

function Content({
  isLogin,
  userInfo,
  selectedContent,
  likeCount,
  setLikeCount,
  unlikeCount,
  setUnlikeCount,
  replyList,
  replyListHandler,
  getSelectedContent,
  contentsListHandler,
  getUserInfo,
}) {
  console.log("게시글 선택창", selectedContent);
  const history = useHistory();
  // const location = useLocation();
  console.log(
    "유저 아이디 vs 게시글 작성자 아이디",
    userInfo.id,
    "vs",
    selectedContent.userId
  );
  console.log("글내용 :", selectedContent.contents);
  useEffect(() => {
    // localStorage.setItem("selectedPostId", selectedContent.id);
    // console.log(localStorage.getItem("selectedPostId"));
    getSelectedContent(localStorage.getItem("selectedPostId"));
    // console.log("987987987987987987987", selectedContent);
    axios
      .post(`${process.env.REACT_APP_API_URL}/getposts`)
      .then((res) => {
        console.log("전체게시글 요청 응답", res.data);
        contentsListHandler(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // if (localStorage.getItem("selectedPostId"))

    axios
      .post(`${process.env.REACT_APP_API_URL}/getposts`)
      .then((res) => {
        console.log("전체게시글 요청 응답", res.data);
        contentsListHandler(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });


  }, []);

  const modifyHandler = () => {
    // 로그인 상태인지 확인
    // 로그인 되어 있다면 본인 게시글인지 확인
    // 맞다면 게시글 수정 페이지로 이동
    // 다른 사람 글이면 권한이 없습니다.

    if (isLogin) {
      if (userInfo.id === selectedContent.userId) {
        // 게시글 수정 페이지로 이동
        // history.push("/content-modi-create");
        history.push({
          pathname: "/content-modi-create",
          state: { selectedContent: selectedContent },
        });
      } else {
        return alert("자신의 게시글만 수정할 수 있습니다.");
      }
    } else {
      return alert("로그인 후 수정할 수 있습니다.");
    }
    // console.log(selectedContent);
  };

  const deleteHandler = () => {
    // 로그인 상태인지 확인
    // 로그인 되어 있다면 본인 게시글인지 확인
    // 맞다면 게시글 삭제 요청
    // 다른 사람 글이면 권한이 없습니다.
    if (isLogin) {
      if (userInfo.id === selectedContent.userId) {
        axios
          .post(`${process.env.REACT_APP_API_URL}/deletepost`, {
            postId: selectedContent.id,
            login_id: userInfo.login_id,
          })
          .then((res) => {
            // App.js에 삭제된 게시글 정보 전달
            console.log("게시글 삭제 요청 응답", res);
            if (res.data === "success!") {
              axios
                .post(`${process.env.REACT_APP_API_URL}/getposts`)
                .then((res) => {
                  console.log("전체게시글 요청 응답", res.data);
                  contentsListHandler(res.data.data);
                })
                .catch((err) => {
                  console.log(err);
                });
              getUserInfo();
              alert("게시글이 삭제되었습니다.");
              history.push("/");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        return alert("자신의 게시글만 삭제할 수 있습니다.");
      }
    } else {
      return alert("로그인 후 삭제할 수 있습니다.");
    }
  };

  const likeHandler = () => {
    if (!isLogin) {
      return alert("로그인 후 이용하실 수 있습니다.");
    }
    console.log(likeCount);
    axios
      .post(`${process.env.REACT_APP_API_URL}/likeunlike`, {
        userId: userInfo.id,
        postId: selectedContent.id,
        click: "like",
      })
      .then((res) => {
        console.log("좋아요 요청에 대한 응답", res.data);
        if (res.data.message === "ok") {
          console.log("-------", res.data);
          setLikeCount(res.data.data.like);
          setUnlikeCount(res.data.data.unlike);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unlikeHandler = () => {
    console.log(unlikeCount);
    if (!isLogin) {
      return alert("로그인 후 이용하실 수 있습니다.");
    }
    axios
      .post(`${process.env.REACT_APP_API_URL}/likeunlike`, {
        userId: userInfo.id,
        postId: selectedContent.id,
        click: "unlike",
      })
      .then((res) => {
        console.log("싫어요 요청에 대한 응답", res.data);
        if (res.data.message === "ok") {
          // console.log("------", res);
          setLikeCount(res.data.data.like);
          setUnlikeCount(res.data.data.unlike);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="ContentContainer" style={{background: "linear-gradient(to right bottom, #f4f4f4, #ecd6a7, #70e1f5)"}}>
      <A11yHidden>컨텐츠</A11yHidden>
      <Article>
        <ContentImg src={selectedContent.image}/>
        <div className="ContentArticle">
          <Title>{selectedContent.title}</Title>
          <TextContent>{selectedContent.contents}</TextContent>
          <UserMindBtn>
            <UserMindBtnLike src={like} onClick={likeHandler}>
              <Btn>{likeCount}</Btn>
            </UserMindBtnLike>
            <UserMindBtnDisLike src={disLike} onClick={unlikeHandler}>
              <Btn>{unlikeCount}</Btn>
            </UserMindBtnDisLike>
          </UserMindBtn>
          <Replys
            isLogin={isLogin}
            userInfo={userInfo}
            selectedContent={selectedContent}
            replyList={replyList}
            replyListHandler={replyListHandler}
          />
          {isLogin && userInfo.id === selectedContent.userId ? (
            <ModifyBtn onClick={modifyHandler}>수정</ModifyBtn>
            ) : null}
          {isLogin && userInfo.id === selectedContent.userId ? (
            <DeleteBtn onClick={deleteHandler}>삭제</DeleteBtn>
            ) : null}
        </div>
      </Article>
    </div>
  );
}




export default Content;