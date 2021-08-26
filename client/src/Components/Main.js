import React from "react";
import "./Main.css"
import "./reset.css"

function Main() {
  return ( 
    <main>
      <h2 className="a11yHidden">메인 페이지</h2>
      <ul>
        <li>
          <article>
            <h3 className="a11yHidden">content</h3>
            <img src="fff" alt=""/>Content
          </article>
          </li>
        <li>
          <article>
            <h3 className="a11yHidden">content</h3>
            <img src="fff" alt=""/>Content
          </article>
          </li>
        <li>
          <article >
            <h3 className="a11yHidden">content</h3>
            <img src="fff" alt=""/>Content
          </article>
          </li>
      </ul>
    </main>
  );
}

export default Main;