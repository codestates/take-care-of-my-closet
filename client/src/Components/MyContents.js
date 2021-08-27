import React from "react";
import "./MyContents.css";
import "./reset.css";

function MyContents({ userInfo, contents }) {
  const myContents = contents.filter((el) => {
    return el.user_id === userInfo.login_id;
  });
  console.log(myContents);

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
