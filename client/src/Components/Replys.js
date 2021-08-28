import React from "react";
import WriteReply from "./WriteReply";
// import { dummyComment } from "../dummyData/dummyData";

function Replys({
  isLogin,
  userInfo,
  selectedContent,
  replyList,
  replyListHandler,
}) {
  return (
    <div>
      <ul>
        {replyList.map((el) => {
          return (
            <li key={el.id}>
              <p>@{el.nickname}</p>
              <section>{el.comment}</section>
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
