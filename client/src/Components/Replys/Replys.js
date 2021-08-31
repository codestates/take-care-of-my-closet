import React from "react";
import WriteReply from "../WriteReply";
import axios from "axios";
import {A11yHidden} from '../Common'
import {ContentList} from '../Replys/ReplysStyled'


axios.defaults.withCredentials = true;

function Replys({
  isLogin,
  userInfo,
  selectedContent,
  replyList,
  replyListHandler,
}) {
  const deleteReply = (e) => {
    e.preventDefault();
    axios
      .post("http:localhost:4000/deleteComment", {
        postId: selectedContent.id,
        userId: userInfo.id,
        // nickname: asdfadfasdsdfds
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
    <>
      <section>
        <A11yHidden>댓글</A11yHidden>
      <ContentList>
        {replyList.map((el) => {
          return (
            <li key={el.id}>
              <p>@{el.user.nickname}</p>
              <span>{el.contents}</span>
              <button onClick={(e) => deleteReply(e)}>댓글 삭제</button>
              {/* {isLogin && el.user.nickname === userInfo.nickname ? (
                <button onClick={(e) => deleteReply(e)}>댓글 삭제</button>
              ) : null} */}
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
