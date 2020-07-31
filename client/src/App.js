import React from 'react';
/* import logo from './logo.svg'; */

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import NavbarHdg from "./components/containers/NavbarHdg/index.js";
import Footer from "./components/containers/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap"

import Main from  "./pages/Main.js"
import Details from  "./pages/Details.js"
import Landing from  "./pages/Landing.js"
import Login from  "./pages/Login.js"
import Register from  "./pages/Register.js"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faThumbsUp,faThumbsDown} from '@fortawesome/free-solid-svg-icons';


import "./App.css";


library.add(fab,faThumbsUp,faThumbsDown);

function App(props) {
  
  const whichPage=window.location.pathname.split('/')[1]; 
  
  return (
    <Router>
      <div  className="body_container" >
      {whichPage !== "landing" && whichPage !== "home" && whichPage !== "" && <NavbarHdg activePage={whichPage}/>}
        <Container fluid className="noMarginsOrPadding">
            
            <Switch>
              <Route path="/landing"><Landing /></Route>
              <Route path="/money"> <Main whichSection="finances"  /></Route>
              <Route path="/handywoman"><Main whichSection="practical"  /></Route>
              <Route path="/legal"><Main whichSection="legal" /></Route>
              <Route path="/jobs"><Main whichSection="jobs" /> </Route>
              <Route path="/mentalhealth"><Main whichSection="mentalhealth"/></Route>
              <Route path="/details"><Details /></Route>
              <Route path="/login"><Login /></Route>
              <Route path="/register"><Register /></Route>
              <Route path="/"><Landing/></Route>
            </Switch>
            {whichPage !== "landing" && whichPage !== "home" && whichPage !== "" && whichPage !== "/" && <Footer /> }
        </Container>
      </div>
    </Router>
  );
}

export default App;
