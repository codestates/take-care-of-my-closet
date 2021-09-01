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
      .post(`${process.env.REACT_APP_API_URL}/createComment`, payload)
      .then((res) => {
        // 등록한 댓글이 추가됨
        console.log("댓글 등록 요청 응답", res.data);
        if (res.data.message === "create!") {
          replyListHandler(res.data.data);
          // setReplyValue("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <textarea
        rows="10"
        cols="40"
        onChange={(e) => inputReplyHandler(e)}
        placeholder="여기에 댓글을 입력하세요"
      />

      <button onClick={requestReply}>등록</button>
    </div>
  );
}

export default WriteReply;
