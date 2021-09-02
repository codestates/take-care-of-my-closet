import React, { useState } from "react"
import { Link } from "react-router-dom"

// import '../Styled/UserStyled.css'

import {FlexNavUl} from '../Styled/Flex'
import {NavBtn} from '../Styled/NavStyled'
import { Ul } from "../Styled/UserStyled";
import '../Styled/Common.css'

function User({ logoutHandler }, className) {
  const [userBtnIsOn, setUserBtnIsOn] = useState("")


  const UserBtnHandler = (e) => {
    e.preventDefault()
    setUserBtnIsOn(!userBtnIsOn);
  };
  

  return (
    <FlexNavUl>
        <button style={{background: "transparent", border:0, padding:0, fontSize:"20px", cursor:"pointer" , color:"rgb(85, 83, 83"}} onClick={(e) => UserBtnHandler(e)}>User</button>
      {userBtnIsOn ? (
        <div className="userLi" style={{color:"rgb(85, 83, 83"}}>
          <Link to="/mycontents" style={{textDecoration:"none", color: "black"}} >
            <li>My Contents</li>
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
  )
}
export default User


{/* <FlexNavUl>
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
export default User; */}