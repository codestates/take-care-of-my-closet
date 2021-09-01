import React, { useState, useEffect } from "react";
import WriteReply from "./WriteReply";
import axios from "axios";

import { A11yHidden } from "../Styled/Common";
import { ContentList } from "../Styled/ReplysStyled";

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
        console.log(res);
        if (res.data === "delete!") {
          replyListHandler(res.data.comments);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedReplyId]);

  const deleteReply = (e) => {
    e.preventDefault();
    console.log(e.target.parentElement.getAttribute("class"));
    setselectedReplyId(e.target.parentElement.getAttribute("class"));
  };

  return (
    <>
      <section>
        <A11yHidden>댓글</A11yHidden>
        <ContentList>
          {replyList.map((el) => {
            return (
              <li key={el.id} className={el.id}>
                <p>@{el.user.nickname}</p>
                <span>{el.contents}</span>
                {isLogin && el.user.nickname === userInfo.nickname ? (
                  <button onClick={(e) => deleteReply(e)}>댓글 삭제</button>
                ) : null}
                {/* <button onClick={(e) => deleteReply(e)}>댓글 삭제</button> */}
              </li>
            );
          })}
        </ContentList>
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
