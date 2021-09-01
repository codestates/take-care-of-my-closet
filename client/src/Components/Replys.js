import React, { useState, useEffect } from "react";
import WriteReply from "./WriteReply";
import axios from "axios";

import { A11yHidden } from "../Styled/Common";
import { ReplysUl, ReplyLi } from "../Styled/ReplysStyled";

axios.defaults.withCredentials = true;

function Replys({
  isLogin,
  userInfo,
  selectedContent,
  replyList,
  replyListHandler,
}) {
  const [selectedReplyId, setselectedReplyId] = useState("");

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/deletecomment`, {
        postId: selectedContent.id,
        userId: userInfo.id,
        id: selectedReplyId,
      })
      .then((res) => {
        console.log("댓글 삭제 요청 응답", res.data);
        if (res.data.message === "delete!") {
          replyListHandler(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedReplyId]);

  const deleteReply = (e) => {
    e.preventDefault();
    console.log(e.target.parentElement.getAttribute("id"));
    setselectedReplyId(e.target.parentElement.getAttribute("id"));
  };

  return (
    <>
      <section>
        <A11yHidden>댓글</A11yHidden>
        <ReplysUl>
          {replyList.map((el) => {
            return (
              <ReplyLi key={el.id} id={el.id}>
                <p>&#64;{el.user.nickname}</p>
                <span>{el.contents}</span>
                {isLogin && el.user.nickname === userInfo.nickname ? (
                  <button onClick={(e) => deleteReply(e)}>댓글 삭제</button>
                ) : null}
                {/* <button onClick={(e) => deleteReply(e)}>댓글 삭제</button> */}
              </ReplyLi>
            );
          })}
        </ReplysUl>
      </section>
      <WriteReply
        isLogin={isLogin}
        userInfo={userInfo}
        selectedContent={selectedContent}
        replyListHandler={replyListHandler}
      />
    </>
  );
}

export default Replys;
