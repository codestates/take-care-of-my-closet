import React, { useState } from "react";
import axios from "axios";

function WriteReply({ isLogin, userInfo, selectedContent, replyListHandler }) {
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

    const payload = {
      postId: selectedContent.id,
      userId: userInfo.id,
      comment: replyValue,
    };

    axios
      .post("https://takecareofmycloset", payload, { withCredentials: true })
      .then((res) => {
        // 등록한 댓글이 추가됨
        console.log(res);
        if (res.message === "ok") {
          replyListHandler(res.comments);
        }
      });
  };

  return (
    <div>
      <ul>
        <textarea
          onChange={(e) => inputReplyHandler(e)}
          placeholder="여기에 댓글을 입력하세요"
        ></textarea>
      </ul>
      <button onClick={requestReply}>등록</button>
    </div>
  );
}

export default WriteReply;
