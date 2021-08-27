import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MyContents.css";
import "./reset.css";

function MyContents({ isLogin, userInfo }) {
  const [myContents, setMyContents] = useState([]);

  useEffect(() => {
    axios
      .post(
        "https://takecareofmycloset/getposts",
        {
          login_id: userInfo.login_id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        setMyContents([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!isLogin) {
    return <div>로그인 후 이용하세요.</div>;
  }
  if (myContents.length === 0) {
    return <div>작성한 글이 없습니다.</div>;
  }

  return (
    <main>
      <h2 className="a11yHidden">마이 콘텐츠</h2>
      <ul>
        {myContents.map((el) => {
          return (
            <li key={el.id}>
              <article>
                <h3 className="a11yHidden">{myContents.title}</h3>
                <img src={myContents.image} alt={myContents.title} />
              </article>
            </li>
          );
        })}
        {/* <li>
          <article>
            <h3 className="a11yHidden">content</h3>
            <img src="fff" alt="" />
            My Content
          </article>
        </li>
        <li>
          <article>
            <h3 className="a11yHidden">content</h3>
            <img src="fff" alt="" />
            My Content
          </article>
        </li>
        <li>
          <article>
            <h3 className="a11yHidden">content</h3>
            <img src="fff" alt="" />
            My Content
          </article>
        </li> */}
      </ul>
    </main>
  );
}

export default MyContents;
