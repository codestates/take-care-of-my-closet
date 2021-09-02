import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./MyContents.css";
// import "./reset.css";
import { Cookies } from "react-cookie";
import { MainUl, MainArticle, MainImg, MainP } from "../Styled/MainStyled";
import { A11yHidden } from "../Styled/Common";

const cookies = new Cookies();

function MyContents({
  isLogin,
  userInfo,
  handleContentClick,
  myContents,
  setMyContents,
}) {
  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/getposts`,
        {
          id: userInfo.id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "my posts") {
          setMyContents(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    

  }, [userInfo]);

  if (!isLogin) {
    return <div>로그인 후 이용하세요.</div>;
  }
  if (myContents.length === 0) {
    return <div>작성한 글이 없습니다.</div>;
  }

  return (
    <section>
      <A11yHidden>마이 콘텐츠</A11yHidden>
       <MainUl>
        {myContents.map((el) => {
          return (
            <Link to="/content">
              <li key={el.id} onClick={() => handleContentClick(el.id)}>
              <MainArticle>
                <p style={{borderBottom:"1px solid #ccc",borderRadius:0}} className="title">{el.title}</p>
                <MainImg src={el.image} alt="img-thumbnail" />
                <MainP style={ {borderTop:"1px solid #ccc"}} >&copy; {el.user.nickname}</MainP>
              </MainArticle>
              </li>
            </Link>
          );
        })}
      </MainUl>
    </section>
  );
}

export default MyContents;