import React, { useState } from "react";
import { Link } from "react-router-dom";

import '../Styled/UserStyled.css'
import {FlexNavUl} from '../Styled/Flex'
import {NavBtn} from '../Styled/NavStyled'
import { Ul } from "../Styled/UserStyled";

function User({ logoutHandler }, className) {
  const [userBtnIsOn, setUserBtnIsOn] = useState("");

  const UserBtnHandler = (e) => {
    e.preventDefault()
    setUserBtnIsOn(!userBtnIsOn);
  };

  return (
    <FlexNavUl>
        <button className="dkd" onClick={(e) => UserBtnHandler(e)}>User</button>
      {userBtnIsOn ? (
        <div className="userli">
          <Link to="/mycontents" style={{textDecoration:"none", color: "black"}} >
            <li t>My Contents</li>
          </Link>
          <Link to="/mypage" style={{textDecoration:"none", color: "black"}}>
            <li style={{marginTop:"6px"}}>My page</li>
          </Link>
          <Link to="/" style={{textDecoration:"none", color: "black"}}>
            <li style={{marginTop:"6px"}}onClick={() => logoutHandler()}>로그아웃</li>
          </Link>
        </div>
      ) : null}
    </FlexNavUl>
  );
}
export default User;
