import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Replys from "./Replys";
import { dummyContents } from "../dummyData/dummyData";

function Content({
  isLogin,
  userInfo,
  selectedContent,
  replyList,
  replyListHandler,
}) {
  const [likeCount, setLikeCount] = useState(0);
  const [isClickLike, setIsClickLike] = useState(false);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [isClickDislike, setIsClickDislike] = useState(false);

  const history = useHistory();

  useEffect(() => {
    requestLike();
    requestDislike();
  }, [likeCount, dislikeCount]);

  // const requestContent = () => {
  //   axios
  //     .post(
  //       "https://takecareofmycloset/content",
  //       {
  //         id: selectedContent.id,
  //       },
  //       { withCredentials: true }
  //     )
  //     .then((res) => {
  //       console.log(res);
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
          .delete("https://", {
            id: "해당 컨텐츠 id",
          })
          .then((res) => {
            // App.js에 삭제된 게시글 정보 전달
            history.push("/");
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
    if (!isClickLike && isClickDislike) {
      // 좋아요x 싫어요o 일때 좋아요 누르면
      setIsClickDislike(false); // 싫어요 취소
      setDislikeCount(dislikeCount - 1); // 싫어요 카운트 -1
      setLikeCount(likeCount + 1); // 좋아요 카운트 +1
    } else if (!isClickLike && !isClickDislike) {
      // 좋아요x 싫어요x 일때 좋아요 누르면
      setLikeCount(likeCount + 1); // 좋아요 카운트 +1
    } else if (isClickLike && !isClickDislike) {
      // 좋아요o 싫어요x 일때 좋아요 누르면
      setLikeCount(likeCount - 1); // 좋아요 카운트 -1
    }
    setIsClickLike(!isClickLike); // 좋아요 상태 변경
  };

  const dislikeHandler = () => {
    if (!isClickDislike && isClickLike) {
      // 싫어요x 좋아요o 일때 싫어요 누르면
      setIsClickLike(false); // 좋아요 취소
      setLikeCount(likeCount - 1); // 좋아요 카운트 -1
      setDislikeCount(dislikeCount + 1); // 싫어요 카운트 +1
    } else if (!isClickDislike && !isClickLike) {
      // 싫어요x 좋아요x 일때 싫어요 누르면
      setDislikeCount(dislikeCount + 1); // 싫어요 카운트 +1
    } else if (isClickDislike && !isClickLike) {
      // 싫어요o 좋아요x 일때 싫어요 누르면
      setDislikeCount(dislikeCount - 1); // 싫어요 카운트 -1
    }
    setIsClickDislike(!isClickDislike); // 싫어요 상태 변경
  };

  const requestLike = () => {
    // isClickLike가 true일 때는 좋아요 +1 요청
    // isClickLike가 false일 때는 좋아요 -1 요청
    console.log(likeCount, isClickLike);
    axios.post("https://", {}, { withCredentials: true });
  };

  const requestDislike = () => {
    // isClickDislike가 true일 때는 싫어요 +1 요청
    // isClickDislike가 false일 때는 싫어요 -1 요청
    console.log(dislikeCount, isClickDislike);
    // axios.post("https://");
  };

  return (
    <article>
      <h2>컨텐츠</h2>
          <img src={dummyContents[0].img} alt="img-thumbnail" />
          <span>{dummyContents[0].title}</span>
          {/* {isLogin && userInfo.id === selectedContent.userId ? (
            <button onClick={modifyHandler}>수정</button>
          ) : null} */}
          {/* {isLogin && userInfo.id === selectedContent.userId ? (
            <button onClick={deleteHandler}>삭제</button>
          ) : null} */}
          <textarea defaultValue={dummyContents[0].contents} disabled="true"/>
          <button onClick={likeHandler}>좋아요 {likeCount}</button>
          <button onClick={dislikeHandler}>싫어요 {dislikeCount}</button>
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
