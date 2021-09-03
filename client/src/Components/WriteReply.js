import React, { useState } from "react";
import axios from "axios";
import {
  ReplyTextContent,
  ReplyBtn,
  CreateReplyBox,
} from "../Styled/ReplysStyled";
import { Btn } from "../Styled/Common";
axios.defaults.withCredentials = true;

function WriteReply({ isLogin, userInfo, selectedContent, replyListHandler }) {
  const [replyValue, setReplyValue] = useState("");

  const inputReplyHandler = (e) => {
    setReplyValue(e.target.value);
  };

  const requestReply = (e) => {
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
          setReplyValue("");
          e.target.previousSibling.value = "";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CreateReplyBox>
      <ReplyTextContent
        onChange={(e) => inputReplyHandler(e)}
        placeholder="여기에 댓글을 입력하세요"
      />
      <ReplyBtn onClick={(e) => requestReply(e)}>등록</ReplyBtn>
    </CreateReplyBox>
  );
}

export default WriteReply;