import "./App.css"
import React, { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"

import Login from "./Components/Login"
import Main from "./Components/Main"
import MyContents from "./Components/MyContents"
import MyPage from "./Components/MyPage"
import SignUp from "./Components/SignUp"

function App() {
  const [isLogin, setIsLogin] = useState(false)

  const ChangeLoginState = (boolean) => {
    setIsLogin(boolean)
  }

  // console.log(location) // <-----------------------------

  // let location = { pathname: "/login" }

  return (
    <React.Fragment>
      <BrowserRouter>
        <div>
          <main>
            {/* {location.pathname === "/login" ||
            location.pathname === "/signup" ? (
              <></>
            ) : (
              <Nav isLogin={isLogin} ChangeLoginState={ChangeLoginState} />
            )} */}
            <Nav isLogin={isLogin} ChangeLoginState={ChangeLoginState} />
            <section>
              <Switch>
                <Route exact path="/">
                  <Main />
                </Route>
                <Route path="/login">
                  <Login ChangeLoginState={ChangeLoginState} />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
                <Route path="/mycontents">
                  <MyContents isLogin={isLogin} />
                </Route>
                <Route path="/mypage">
                  <MyPage isLogin={isLogin} />
                </Route>
              </Switch>
            </section>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
