import React, { useState } from "react";
import { Link } from "react-router-dom";

// import '../Styled/UserStyled.css'
import { FlexNavUl } from "../Styled/Flex";
import { NavBtn } from "../Styled/NavStyled";
import { Ul } from "../Styled/UserStyled";

function User({ logoutHandler }, className) {
  const [userBtnIsOn, setUserBtnIsOn] = useState("");

  const UserBtnHandler = () => {
    setUserBtnIsOn(!userBtnIsOn);
  };

  return (
    <Ul>
      <NavBtn>
        <span onClick={UserBtnHandler}>User</span>
      </NavBtn>
      {userBtnIsOn ? (
        <>
          <Link to="/mycontents">
            <li>My Contents</li>
          </Link>
          <Link to="/mypage">
            <li>My page</li>
          </Link>
          <Link to="/">
            <li onClick={logoutHandler}>로그아웃</li>
          </Link>
        </>
      ) : null}
    </Ul>
  );
}
export default User;
