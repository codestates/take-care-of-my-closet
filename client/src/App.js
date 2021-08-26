import "./App.css";
import React from "react";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

import Login from "./Components/Login";

import SignUp from "./Components/SignUp";

function App() {
  return (
    // <div>
    //   <SignUp />
    // </div>
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {/* <Main/> */}
          </Route>
        </Switch>

        <Nav />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
