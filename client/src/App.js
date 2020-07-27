import React from 'react';
/* import logo from './logo.svg'; */

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import NavbarHdg from "./components/containers/NavbarHdg/index.js";
import Footer from "./components/containers/Footer";
import Wrapper from "./components/containers/Wrapper";

import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap"

import Main from  "./pages/Main.js"
import Details from  "./pages/Details.js"
import Landing from  "./pages/Landing.js"
import Login from  "./pages/Login.js"
import Register from  "./pages/Register.js"

import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faThumbsUp,faThumbsDown} from '@fortawesome/free-solid-svg-icons';


import "./App.css";


library.add(fab,faThumbsUp,faThumbsDown);

function App(props) {
  
  const whichPage=window.location.pathname.split('/')[1]; 
  
  return (
    <Router>
      <div  >
      {whichPage !== "landing" && whichPage !== "home" && whichPage !== "" && <NavbarHdg activePage={whichPage}/>}
        <Container fluid>
            
            <Switch>
              <Route path="/landing"><Landing /></Route>
              <Route path="/money">
                <Wrapper>
                  <Main whichSection="finances"  />
                </Wrapper>
              </Route>
              <Route path="/handywoman">
                <Wrapper>
                  <Main whichSection="practical"  />
                </Wrapper>
              </Route>
              <Route path="/legal">
                <Wrapper>
                  <Main whichSection="legal"  />
                </Wrapper>
              </Route>
              <Route path="/jobs">
                <Wrapper>
                  <Main whichSection="jobs"/>
                </Wrapper>
              </Route>
              <Route path="/mentalhealth">
                <Wrapper>
                  <Main whichSection="mentalhealth"/>
                </Wrapper>
              </Route>
              <Route path="/details">
                <Wrapper>
                  <Details />
                </Wrapper>
              </Route>
              <Route path="/login">
                <Wrapper>
                  <Login />
                </Wrapper>
              </Route>
              <Route path="/register">
                <Wrapper>
                  <Register />
                </Wrapper> 
              </Route>
              <Route path="/">
                <Landing/>
              </Route>
            </Switch>
            {whichPage !== "landing" && whichPage !== "home" && whichPage !== "" && <Footer />}
        </Container>
      </div>
    </Router>
  );
}

export default App;
