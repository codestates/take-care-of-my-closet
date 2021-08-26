import React from "react"
import "./MyContents.css"
import "./reset.css"
import axios from "axios"

function MyContents({ isLogin }) {
  // axios.post('')
  return (
    // <div>마이 컨텐츠</div>
    <main>
      <h2 className="a11yHidden">마이 콘텐츠</h2>
      <ul>
        <li>
          <article>
            <h3 className="a11yHidden">content</h3>
            <img src="fff" alt=""/>My Content
          </article>
          </li>
        <li>
          <article>
            <h3 className="a11yHidden">content</h3>
            <img src="fff" alt=""/>My Content
          </article>
          </li>
        <li>
          <article >
            <h3 className="a11yHidden">content</h3>
            <img src="fff" alt=""/>My Content
          </article>
          </li>
      </ul>
    </main >
  )
}

export default MyContents
