import React from "react";
import "./style.css";
import {Navbar,Nav, Button,Col} from "react-bootstrap"

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function NavbarHdg(props) {
  const whichPage=`/${props.activePage}`;
  return (
    
    <Navbar collapseOnSelect="true" 
            expand="md"  
            className="navbar-bbw" 
            defaultActiveKey={whichPage} 
            as="ul" 
            justify="right" 
            sticky="top"
            defaultExpanded="false"
            variant="dark">

      <Navbar.Brand> <h1 className="navbar-bbw" >Building Better Women</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
     
      <Navbar.Collapse id="responsive-navbar-nav" className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <Nav className="mr-right"> 
            <Nav.Item as="li">
              <Nav.Link href="/home"><p>Home</p></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/money"><p>Money</p></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/handywoman"><p>Handywoman</p></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/legal"><p>Legal</p></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/jobs"><p>Jobs</p></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/mentalhealth"><p>Mental Health</p></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/contacts"><p>Contact Us</p></Nav.Link>
            </Nav.Item>
        </Nav>
        
          
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarHdg;


