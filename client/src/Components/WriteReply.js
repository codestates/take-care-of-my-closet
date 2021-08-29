import React, { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

function WriteReply({ isLogin, userInfo, selectedContent, replyListHandler }) {
  const [replyValue, setReplyValue] = useState("");

  const inputReplyHandler = (e) => {
    setReplyValue(e.target.value);
  };

  const requestReply = () => {
    if (!replyValue) {
      return alert("댓글을 입력하세요.");
    }
    if (!isLogin) {
      return alert("로그인 후 등록 가능합니다.");
    }

    const payload = {
      postId: selectedContent.id,
      userId: userInfo.id,
      comments: replyValue,
    };

    axios
      .post("http://localhost:4000/createComment", payload)
      .then((res) => {
        // 등록한 댓글이 추가됨
        console.log(res);
        if (res.message === "create!") {
          replyListHandler(res.contents);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <textarea
        onChange={(e) => inputReplyHandler(e)}
        placeholder="여기에 댓글을 입력하세요"
      />

      <button onClick={requestReply}>등록</button>
    </div>
  );
}

export default WriteReply;
