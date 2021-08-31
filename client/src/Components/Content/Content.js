import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Replys from "../Replys/Replys"
import { dummyContents } from "../../dummyData/dummyData";


// import './Content.css'
import {FlexArticle} from '../Flex'
import {A11yHidden, Btn} from '../Common'
import {Article, ContentImg, Section, Title, TextContent, UserMindBtn, UserMindBtnLike, UserMindBtnDisLike,ModifyBtn,  DeleteBtn} from'./ContentStyled'
import like from '../../image/like.png'
import disLike from '../../image/bad.png'

axios.defaults.withCredentials = true;

function Content({
  isLogin,
  userInfo,
  selectedContent,
  likeCount,
  setLikeCount,
  unlikeCount,
  setUnlikeCount,
  replyList,
  replyListHandler,
}) {
  // const [isClickLike, setIsClickLike] = useState(false);
  // const [isClickUnlike, setIsClickUnlike] = useState(false);

  const history = useHistory();

  // const requestContent = () => {
  //   axios
  //     .post(
  //       "http://localhost:4000/getContents",
  //       {
  //         id: selectedContent.id,
  //       },
  //       { withCredentials: true }
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       if (res.message === "ok") {
  //         setLikeCount(res.likeCount);
  //         setDislikeCount(res.unlikeCount);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const modifyHandler = () => {
    // 로그인 상태인지 확인
    // 로그인 되어 있다면 본인 게시글인지 확인
    // 맞다면 게시글 수정 페이지로 이동
    // 다른 사람 글이면 권한이 없습니다.
    // if (isLogin) {
    //   if (userInfo.id === dummyContents[0].userId) {
    //     // 게시글 수정 페이지로 이동
    //     history.push("/content-modi-create");
    //   } else {
    //     return alert("자신의 게시글만 수정할 수 있습니다.");
    //   }
    // } else {
    //   return alert("로그인 후 수정할 수 있습니다.");
    // }
    console.log(selectedContent);

    history.push({
      pathname: "/content-modi-create",
      state: { selectedContent: selectedContent },
    });
  };

  const deleteHandler = () => {
    // 로그인 상태인지 확인
    // 로그인 되어 있다면 본인 게시글인지 확인
    // 맞다면 게시글 삭제 요청
    // 다른 사람 글이면 권한이 없습니다.
    if (isLogin) {
      if (userInfo.id === dummyContents[0].userId) {
        axios
          .delete("http://localhost:4000/deletepost", {
            postId: selectedContent.id,
            login_id: userInfo.login_id,
          })
          .then((res) => {
            // App.js에 삭제된 게시글 정보 전달
            if (res.message === "ok") {
              alert("게시글이 삭제되었습니다.");
              history.push("/");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        return alert("자신의 게시글만 삭제할 수 있습니다.");
      }
    } else {
      return alert("로그인 후 삭제할 수 있습니다.");
    }
  };

  const likeHandler = () => {
    if (!isLogin) {
      return alert("로그인 후 이용하실 수 있습니다.");
    } else {
      axios
        .post("http://localhost:4000/likeunlike", {
          userId: userInfo.id,
          postId: selectedContent.id,
          click: "like",
        })
        .then((res) => {
          console.log(res);
          if (res.message === "ok") {
            setLikeCount(res.data.like);
            setUnlikeCount(res.data.unlike);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const unlikeHandler = () => {
    if (!isLogin) {
      return alert("로그인 후 이용하실 수 있습니다.");
    } else {
      axios
        .post("http://localhost:4000/likeunlike", {
          userId: userInfo.id,
          postId: selectedContent.id,
          click: "unlike",
        })
        .then((res) => {
          console.log(res);
          if (res.message === "ok") {
            setLikeCount(res.data.like);
            setUnlikeCount(res.data.unlike);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <FlexArticle>
      <A11yHidden>컨텐츠</A11yHidden>
      <Article>
        {/* <img src={dummyContents[0].img} alt="img-thumbnail"/> */}
        <ContentImg src={dummyContents[0].img} alt="img-thumbnail"/>
        <Section>
          <Title>{dummyContents[0].title}</Title>
          {/* <p>{dummyContents[0].title}</p> */}
          <TextContent readOnly="true" cols="30"
          rows="10">{dummyContents[0].contents}</TextContent>
          <UserMindBtn>
              <UserMindBtnLike src={like}  onClick={likeHandler}>
                {/* <Btn onClick={likeHandler}>{likeCount}</Btn> */}
                <Btn>{likeCount}</Btn>
              </UserMindBtnLike>
              <UserMindBtnDisLike src={disLike} onClick={unlikeHandler}>
               <Btn>{unlikeCount}</Btn>
              </UserMindBtnDisLike>
          </UserMindBtn>
          <Replys
            isLogin={isLogin}
            userInfo={userInfo}
            selectedContent={selectedContent}
            replyList={replyList}
            replyListHandler={replyListHandler}
            />
        <ModifyBtn onClick={modifyHandler}>수정</ModifyBtn>
        <DeleteBtn onClick={deleteHandler}>삭제</DeleteBtn>
      </Section>
      </Article>
    </FlexArticle>
  );
}

export default Content;
