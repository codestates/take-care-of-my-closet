import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import "./MyContents.css";
// import "./reset.css";
import {ul} from '../Styled/MyContentStyled'
import { Cookies } from "react-cookie";
import { A11yHidden, Legend } from "../Styled/Common";



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
      <ul>
        {myContents.map((el) => {
          return (
            <Link to="/content">
              <li key={el.id} onClick={() => handleContentClick(el.id)}>
                <p>{el.title}</p>
                <img src={el.image} alt="img-thumbnail" />
                <p>&copy; {el.nickname}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
}

export default MyContents;
