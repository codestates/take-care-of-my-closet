import React from "react";
//import "./Footer.css";
import {FooterBox} from "../Styled/FooterStyed" 
// import "./reset.css";

function Footer() {
  return (
    <FooterBox>
      <address>
        <span>갤럭시 지구 금은동 코든램지아파트 1004동 101호</span>
        <span>
          email :{" "}
          <a href="mailto:cordonramsay@smile.com">cordonramsay@smile.com</a>
        </span>
      </address>
      <small>
        Copyright since &copy; 2021 by cordonramsay of Code State CORPORATION
        ALL RIGHTS RESERVED.
      </small>
    </FooterBox>
  );
}

export default Footer;