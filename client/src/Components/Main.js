import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import "./reset.css";

function Main({ contents, handleContentClick }) {
  if (contents.length === 0) {
    return <div>게시글이 없습니다.</div>;
  }
  console.log("메인페이지 컨텐츠", contents);
  return (
    <main>
      <h2 className="a11yHidden">메인 페이지</h2>
      <ul>
        {contents.map((el) => {
          return (
            <Link to="/content">
              <li key={el.id} onClick={() => handleContentClick(el.id)}>
                <article>
                  <p>{el.title}</p>
                  <img src={el.image} alt="img-thumbnail" />
                  <p>@{el.user.nickname}</p>
                </article>
              </li>
            </Link>
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
