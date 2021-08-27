import React from "react";
import "./Main.css";
import "./reset.css";

function Main({ contents }) {
  if (contents.length === 0) {
    return <div>게시글이 없습니다.</div>;
  }

  const selectContent = (e) => {};

  return (
    <main>
      <h2 className="a11yHidden">메인 페이지</h2>
      <ul>
        {contents.map((el) => {
          return (
            <li key={el.id}>
              <article onClick={(e) => selectContent(e)}>
                <h3 className="a11yHidden">{el.title}</h3>
                <img src={el.image} alt={el.title} />
              </article>
            </li>
          );
        })}
        {/* <li>
          <article>
            <h3 className="a11yHidden">content</h3>
            <img src="fff" alt="" />
            Content
          </article>
        </li>
        <li>
          <article>
            <h3 className="a11yHidden">content</h3>
            <img src="fff" alt="" />
            Content
          </article>
        </li>
        <li>
          <article>
            <h3 className="a11yHidden">content</h3>
            <img src="fff" alt="" />
            Content
          </article>
        </li> */}
      </ul>
    </main>
  );
}

export default Main;
