
import "./App.css"
import React, { useState } from "react"
import { Switch, Route, useLocation } from "react-router-dom"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"


import Login from "./Components/Login"
import Main from "./Components/Main"
import MyContents from "./Components/MyContents"
import MyPage from "./Components/MyPage"
import SignUp from "./Components/SignUp"
import ContentModiCreate from "./Components/ContentsModiCreate"


function App() {
  const [isLogin, setIsLogin] = useState(false);

  const ChangeLoginState = (boolean) => {

    setIsLogin(boolean)
  }

  let loca = useLocation()

  console.log("로케이션 제발", loca)

  return (
    <React.Fragment>
        {/* <div> */}
        {loca.pathname === "/login" || loca.pathname === "/signup" ? (
            <></>
          ) : (
            <Nav isLogin={isLogin} ChangeLoginState={ChangeLoginState} />
          )}
        {/* <main> */}
          {/* <section> */}
            <Switch>
              <Route exact path="/">
                <Main/>
              </Route>
              <Route path="/login">
                <Login ChangeLoginState={ChangeLoginState} />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/content-modify-create">
                <ContentModiCreate isLogin={isLogin} />
              </Route>
              <Route path="/mycontents">
                <MyContents isLogin={isLogin} />
              </Route>
              <Route path="/mypage">
                <MyPage isLogin={isLogin} />
              </Route>
            </Switch>
          {/* </section> */}
        {/* </main> */}
        {/* </div> */}
        <Footer />
    </React.Fragment>
  );
}

export default App;
