import React from "react";
import { Link } from "react-router-dom";
// import "./Main.css";
// import "./reset.css";
import { A11yHidden } from "../Styled/Common";
import { MainUl, MainArticle, MainImg, MainP } from "../Styled/MainStyled";

function Main({ contents, handleContentClick }) {
  if (contents.length === 0) {
    return <div>게시글이 없습니다.</div>;
  }
  console.log("메인페이지 컨텐츠", contents);
  return (
    <main>
      <A11yHidden>메인 페이지</A11yHidden>
      <MainUl>
        {contents.map((el) => {
          return (
            <li key={el.id} onClick={() => handleContentClick(el.id)}>
              <Link to="/content" style={{ textDecoration: "none" }}>
                <MainArticle>
                  <p className="title">{el.title}</p>
                  <MainImg src={el.image} alt="img-thumbnail" />
                  <MainP>&#64;{el.user.nickname}</MainP>
                </MainArticle>
              </Link>
            </li>
          );
        })}
      </MainUl>
    </main>
  );
}

export default Main;
