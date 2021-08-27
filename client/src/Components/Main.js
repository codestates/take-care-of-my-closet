import React, { useState } from "react";
import axios from "axios";
import "./Main.css";
import "./reset.css";

function Main() {
  const [contents, setContents] = useState([]);

  axios.get("https://takecareofmycloset/getposts").then((res) => {
    console.log(res);
    setContents([...res.data]);
  });

  return (
    <main>
      <h2 className="a11yHidden">메인 페이지</h2>
      <ul>
        <li>
          <article>
            <h3 className="a11yHidden">content</h3>
            <img src="fff" alt="dd" />
            Content
          </article>
        </li>
        <li>
          <article>
            <h3 className="a11yHidden">content</h3>
            <img src="fff" alt="dd" />
            Content
          </article>
        </li>
        <li>
          <article>
            <h3 className="a11yHidden">content</h3>
            <img src="fff" alt="dd" />
            Content
          </article>
        </li>
      </ul>
    </main>
  );
}

export default Main;
