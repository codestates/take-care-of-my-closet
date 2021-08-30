import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Replys from "./Replys";
import { dummyContents } from "../dummyData/dummyData";

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
}) {
  // const [isClickLike, setIsClickLike] = useState(false);
  // const [isClickUnlike, setIsClickUnlike] = useState(false);

  const history = useHistory();

  // const requestContent = () => {
  //   axios
  //     .post(
  //       "http://localhost:4000/getContents",
  //       {
  //         id: selectedContent.id,
  //       },
  //       { withCredentials: true }
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       if (res.message === "ok") {
  //         setLikeCount(res.likeCount);
  //         setDislikeCount(res.unlikeCount);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const modifyHandler = () => {
    // 로그인 상태인지 확인
    // 로그인 되어 있다면 본인 게시글인지 확인
    // 맞다면 게시글 수정 페이지로 이동
    // 다른 사람 글이면 권한이 없습니다.
    // if (isLogin) {
    //   if (userInfo.id === dummyContents[0].userId) {
    //     // 게시글 수정 페이지로 이동
    //     history.push("/content-modi-create");
    //   } else {
    //     return alert("자신의 게시글만 수정할 수 있습니다.");
    //   }
    // } else {
    //   return alert("로그인 후 수정할 수 있습니다.");
    // }
    console.log(selectedContent);

    history.push({
      pathname: "/content-modi-create",
      state: { selectedContent: selectedContent },
    });
  };

  const deleteHandler = () => {
    // 로그인 상태인지 확인
    // 로그인 되어 있다면 본인 게시글인지 확인
    // 맞다면 게시글 삭제 요청
    // 다른 사람 글이면 권한이 없습니다.
    if (isLogin) {
      if (userInfo.id === dummyContents[0].userId) {
        axios
          .delete("http://localhost:4000/deletepost", {
            postId: selectedContent.id,
            login_id: userInfo.login_id,
          })
          .then((res) => {
            // App.js에 삭제된 게시글 정보 전달
            if (res.message === "ok") {
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
    } else {
      axios
        .post("http://localhost:4000/likeunlike", {
          userId: userInfo.id,
          postId: selectedContent.id,
          click: "like",
        })
        .then((res) => {
          console.log(res);
          if (res.message === "ok") {
            setLikeCount(res.data.like);
            setUnlikeCount(res.data.unlike);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // if (!isClickLike && isClickUnlike) {
    //   // 좋아요x 싫어요o 일때 좋아요 누르면
    //   setIsClickUnlike(false); // 싫어요 취소
    //   setUnlikeCount(unlikeCount - 1); // 싫어요 카운트 -1
    //   setLikeCount(likeCount + 1); // 좋아요 카운트 +1
    // } else if (!isClickLike && !isClickUnlike) {
    //   // 좋아요x 싫어요x 일때 좋아요 누르면
    //   setLikeCount(likeCount + 1); // 좋아요 카운트 +1
    // } else if (isClickLike && !isClickUnlike) {
    //   // 좋아요o 싫어요x 일때 좋아요 누르면
    //   setLikeCount(likeCount - 1); // 좋아요 카운트 -1
    // }
    // setIsClickLike(!isClickLike); // 좋아요 상태 변경
  };

  const unlikeHandler = () => {
    if (!isLogin) {
      return alert("로그인 후 이용하실 수 있습니다.");
    } else {
      axios
        .post("http://localhost:4000/likeunlike", {
          userId: userInfo.id,
          postId: selectedContent.id,
          click: "unlike",
        })
        .then((res) => {
          console.log(res);
          if (res.message === "ok") {
            setLikeCount(res.data.like);
            setUnlikeCount(res.data.unlike);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // if (!isClickUnlike && isClickLike) {
    //   // 싫어요x 좋아요o 일때 싫어요 누르면
    //   setIsClickLike(false); // 좋아요 취소
    //   setLikeCount(likeCount - 1); // 좋아요 카운트 -1
    //   setUnlikeCount(unlikeCount + 1); // 싫어요 카운트 +1
    // } else if (!isClickUnlike && !isClickLike) {
    //   // 싫어요x 좋아요x 일때 싫어요 누르면
    //   setUnlikeCount(unlikeCount + 1); // 싫어요 카운트 +1
    // } else if (isClickUnlike && !isClickLike) {
    //   // 싫어요o 좋아요x 일때 싫어요 누르면
    //   setUnlikeCount(unlikeCount - 1); // 싫어요 카운트 -1
    // }
    // setIsClickUnlike(!isClickUnlike); // 싫어요 상태 변경
  };

  return (
    <article>
      <h2>컨텐츠</h2>
      <img src={selectedContent.image} alt="img-thumbnail" />
      <span>{selectedContent.title}</span>
      {/* {isLogin && userInfo.id === selectedContent.userId ? (
            <button onClick={modifyHandler}>수정</button>
          ) : null} */}
      {/* {isLogin && userInfo.id === selectedContent.userId ? (
            <button onClick={deleteHandler}>삭제</button>
          ) : null} */}
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
      <button onClick={modifyHandler}>수정</button>
      <button onClick={deleteHandler}>삭제</button>
    </article>
  );
}

export default Content;
