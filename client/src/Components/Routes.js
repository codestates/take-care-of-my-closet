import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"
import Login from "./Login"
import Main from "./Main"
import MyContents from "./MyContents"
import MyPage from "./MyPage"
import SignUp from "./SignUp"

function Routes({ isLogin, ChangeLoginState }) {
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
            <Nav />
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

export default Routes
