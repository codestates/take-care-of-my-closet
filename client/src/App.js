import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer'

function App() {
  return (

    // <div>Hello World</div>
    <React.Fragment>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {/* <Main/> */}
        </Route>
      </Switch>
        
      <Nav/>
      <Footer/>
      </BrowserRouter>


    </React.Fragment>


  );
}

export default App;
