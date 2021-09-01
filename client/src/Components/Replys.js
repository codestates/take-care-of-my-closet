import React, { useState, useEffect } from "react";
import WriteReply from "./WriteReply";
import axios from "axios";

import { A11yHidden } from "../Styled/Common";
import { ReplysUl , ReplyLi, ReplysSection, ReplyDeleteBtn} from "../Styled/ReplysStyled";


import deleteBtn from '../image/x-mark.png'
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
      <ReplysSection>
        <A11yHidden>댓글</A11yHidden>
        <ReplysUl>
          {replyList.map((el) => {
            return (
              <ReplyLi key={el.id} className={el.id}>
                <p>&#64;{el.user.nickname}</p>
                <span>{el.contents}</span>
                {isLogin && el.user.nickname === userInfo.nickname ? (
                  <ReplyDeleteBtn src={deleteBtn} onClick={(e) => deleteReply(e)}/>
                ) : null}
                {/* <button onClick={(e) => deleteReply(e)}>댓글 삭제</button> */}
              </ReplyLi>
            );
          })}
        </ReplysUl>
      </ReplysSection>
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
