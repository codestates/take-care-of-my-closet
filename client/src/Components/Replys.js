import React, { useState } from "react";
import WriteReply from "./WriteReply";
import axios from "axios";

axios.defaults.withCredentials = true;

function Replys({
  isLogin,
  userInfo,
  selectedContent,
  replyList,
  replyListHandler,
}) {
  const [selectedReplyId, setselectedReplyId] = useState("");

  const deleteReply = (e) => {
    e.preventDefault();
    console.log(e.target.parentElement.getAttribute("class"));
    setselectedReplyId(e.target.parentElement.getAttribute("class"));
    axios
      .post("http:localhost:4000/deleteComment", {
        postId: selectedContent.id,
        userId: userInfo.id,
        id: selectedReplyId,
      })
      .then((res) => {
        console.log(res);
        if (res.message === "delete!") {
          replyListHandler(res.comments);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <ul>
        {replyList.map((el) => {
          return (
            <li key={el.id} className={el.id}>
              <p>@{el.user.nickname}</p>
              <section>{el.contents}</section>
              {/* {isLogin && el.user.nickname === userInfo.nickname ? (
                <button onClick={(e) => deleteReply(e)}>댓글 삭제</button>
              ) : null} */}
              <button onClick={(e) => deleteReply(e)}>댓글 삭제</button>
            </li>
          );
        })}
      </ul>
      <WriteReply
        isLogin={isLogin}
        userInfo={userInfo}
        selectedContent={selectedContent}
        replyListHandler={replyListHandler}
      />
    </div>
  );
}

export default Replys;
