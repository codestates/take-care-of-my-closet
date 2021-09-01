import React, { useState } from "react";
import { Link } from "react-router-dom";

function User({ logoutHandler }, className) {
  const [userBtnIsOn, setUserBtnIsOn] = useState("");

  const UserBtnHandler = () => {
    setUserBtnIsOn(!userBtnIsOn);
  };

  return (
    <ul>
      <button className="navBtn">
        <span onClick={UserBtnHandler}>User</span>
      </button>
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
    </ul>
  );
}
export default User;
