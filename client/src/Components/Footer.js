import React from "react"
//import "./Footer.css"
import {FooterBox} from "../Styled/FooterStyled"
// import "./reset.css";

function Footer() {
  return (
    <FooterBox >
      <address>
        <span>
          contact us :{"    "}
          <a href="https://github.com/Realroot">Lee Youn-Geun</a>
          {" ,   "}
          <a href="https://github.com/James940522">Jung Jae-min</a>
          {" ,   "}
          <a href="https://github.com/Achates09">Wi Seok-Ryang</a>
          {" ,   "}
          <a href="https://github.com/jjub0217">Kang Joo-Hyun</a>
          {"      "}
        </span>
        <div>
          <span>
            email :{" "}
            <a href="mailto:codenramsay@smile.com">cordonramsay@smile.com</a>
          </span>
        </div>
      </address>
      <small>
        Copyright since &copy; 2021 by cordonramsay of Code State CORPORATION
        ALL RIGHTS RESERVED.
      </small>
      </FooterBox>
  )
}

export default Footer
