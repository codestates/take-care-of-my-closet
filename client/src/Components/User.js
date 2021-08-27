import React, { useState } from "react";
import { Link } from "react-router-dom";

function User({ logoutHandler }) {
  const [userBtnIsOn, setUserBtnIsOn] = useState("");

  const UserBtnHandler = () => {
    setUserBtnIsOn(!userBtnIsOn);
  };

  return (
    <>
      <span onClick={UserBtnHandler}>유저</span>
      {userBtnIsOn ? (
        <>
          <Link to="/mycontents">
            <li>My Contents</li>
          </Link>
          <Link to="/mypage">
            <li>My page</li>
          </Link>
          <Link to="/">
            <li onClick={() => logoutHandler()}>로그아웃</li>
          </Link>
        </>
      ) : null}
    </>
  );
}
export default User;
