import React from 'react';
/* import logo from './logo.svg'; */

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import NavbarHdg from "./components/containers/NavbarHdg";
import Footer from "./components/containers/Footer";
import Wrapper from "./components/containers/Wrapper";

import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap"

import Main from  "./pages/Main.jsx"
import Details from  "./pages/Details.jsx"
import Landing from  "./pages/Landing.jsx"
import Login from  "./pages/Login.jsx"
import Register from  "./pages/Register.jsx"

import "./App.css";

function App() {
  return (
    <Router>
      <div  >
        <Container fluid >
            <Switch>
              <Route path="/landing">
                  <Landing />
              </Route>
              <Route path="/money">
                <NavbarHdg activePage="money"/>
                <Wrapper>
                  <Main whichSection="finances"  />
                </Wrapper>
              </Route>
              <Route path="/handywoman">
                <NavbarHdg activePage="handywoman"/>
                <Wrapper>
                  <Main whichSection="practical"  />
                </Wrapper>
              </Route>
              <Route path="/legal">
                <NavbarHdg activePage="legal"/>
                <Wrapper>
                  <Main whichSection="legal"  />
                </Wrapper>
              </Route>
              <Route path="/jobs">
                <NavbarHdg activePage="jobs"/>
                <Wrapper>
                  <Main whichSection="jobs"/>
                </Wrapper>
              </Route>
              <Route path="/mentalhealth">
                <NavbarHdg activePage="mentalhealth"/>
                <Wrapper>
                <Main whichSection="mentalhealth"/>
                </Wrapper>
              </Route>
              <Route path="/details">
                <NavbarHdg activePage="details"/>
                <Wrapper>
                  <Details />
                </Wrapper>
              </Route>
              <Route path="/login">
                <NavbarHdg activePage="login"/>
                <Wrapper>
                  <Login />
                </Wrapper>
              </Route>
              <Route path="/register">
                <NavbarHdg activePage="register"/>
                <Wrapper>
                  <Register />
                </Wrapper> 
              </Route>
              <Route path="/">
                <Landing/>
                
              </Route>
            </Switch>

          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
