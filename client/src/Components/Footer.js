import React from "react";
import "./Footer.css";
import "./reset.css";

function Footer() {
  return (
    <footer>
      <address>
        <span>갤럭시 지구 금은동 코든램지아파트 1004동 101호</span>
        <span>
          email :{" "}
          <a href="mailto:codenramsay@smile.com">cordenramsay@smile.com</a>
        </span>
      </address>
      <small>
        Copyright since &copy; 2021 by cordenramsay of Code State CORPORATION
        ALL RIGHTS RESERVED.
      </small>
    </footer>
  );
}

export default Footer;
