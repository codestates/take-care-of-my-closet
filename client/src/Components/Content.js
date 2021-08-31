import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Replys from "./Replys";

axios.defaults.withCredentials = true;

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
  selectedId,
}) {
  const [currentPageId, setCurrentPageId] = useState();

  console.log("게시글 선택창", selectedContent);
  const history = useHistory();

  useEffect(() => {
    getSelectedContent(selectedId);
    console.log("좋아요 싫어요 갯수 변경 감지");
  }, []);

  const modifyHandler = () => {
    // 로그인 상태인지 확인
    // 로그인 되어 있다면 본인 게시글인지 확인
    // 맞다면 게시글 수정 페이지로 이동
    // 다른 사람 글이면 권한이 없습니다.
    if (isLogin) {
      if (userInfo.id === selectedContent.id) {
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
    console.log(selectedContent);
  };

  const deleteHandler = () => {
    // 로그인 상태인지 확인
    // 로그인 되어 있다면 본인 게시글인지 확인
    // 맞다면 게시글 삭제 요청
    // 다른 사람 글이면 권한이 없습니다.
    if (isLogin) {
      if (userInfo.id === selectedContent.userId) {
        axios
          .delete("http://localhost:4000/deletepost", {
            postId: selectedContent.id,
            login_id: userInfo.login_id,
          })
          .then((res) => {
            // App.js에 삭제된 게시글 정보 전달
            if (res.message === "success!") {
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
      .post("http://localhost:4000/likeunlike", {
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
      .post("http://localhost:4000/likeunlike", {
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
    <article>
      <h2>컨텐츠</h2>
      <img src={selectedContent.image} alt="img-thumbnail" />
      <span>{selectedContent.title}</span>
      {isLogin && userInfo.id === selectedContent.userId ? (
        <button onClick={modifyHandler}>수정</button>
      ) : null}
      {isLogin && userInfo.id === selectedContent.userId ? (
        <button onClick={deleteHandler}>삭제</button>
      ) : null}
      <textarea
        rows="10"
        cols="40"
        defaultValue={selectedContent.contents}
        disabled="true"
      />
      <button onClick={likeHandler}>좋아요 {likeCount}</button>
      <button onClick={unlikeHandler}>싫어요 {unlikeCount}</button>
      <Replys
        isLogin={isLogin}
        userInfo={userInfo}
        selectedContent={selectedContent}
        replyList={replyList}
        replyListHandler={replyListHandler}
      />
      {/* <button onClick={modifyHandler}>수정</button>
      <button onClick={deleteHandler}>삭제</button> */}
    </article>
  );
}

export default Content;
