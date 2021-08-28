import React, { useState } from "react";
import axios from "axios";
import { dummyComment } from "../dummyData/dummyData";

function Replys({ isLogin, userInfo }) {
  const [replyValue, setReplyValue] = useState("");

  const inputReplyHandler = (e) => {
    setReplyValue(e.target.value);
  };

  const requestReply = () => {
    if (!isLogin) {
      return alert("로그인 후 등록 가능합니다.");
    }
    if (!replyValue) {
      return alert("댓글을 입력하세요.");
    }

    axios
      .post("https://", replyValue, { withCredentials: true })
      .then((res) => {
        // 등록한 댓글이 추가됨
      });
  };

  return (
    <div>
      <ul>
        {dummyComment.map((el) => {
          return (
            <li key={el.id}>
              <p>@{el.nickname}</p>
              <section>{el.content}</section>
            </li>
          );
        })}
        {/* <li>댓글</li>
        <li>댓글</li>
        <li>댓글</li> */}
      </ul>
      <div>
        <ul>
          <textarea
            onChange={(e) => inputReplyHandler(e)}
            placeholder="여기에 댓글을 입력하세요"
          ></textarea>
        </ul>
        <button onClick={requestReply}>등록</button>
      </div>
    </div>
  );
}

export default Replys;
