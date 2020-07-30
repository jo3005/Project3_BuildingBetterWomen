import React from "react";
import "./style.css";
import {Navbar,Nav} from "react-bootstrap"

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function NavbarHdg(props) {
  const whichPage=`/${props.activePage}`;
  return (
    
    <Navbar collapseOnSelect="true" 
            expand="lg"  
            className="navbar-bbw" 
            activekey={whichPage}
            as="ul" 
            justify="right" 
            sticky="top"
            >

      <Navbar.Brand> <h1 className="navbar-bbw" >Building Better Women</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
     
      <Navbar.Collapse id="responsive-navbar-nav" className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <Nav className="mr-right"> 
            <Nav.Item as="li">
              <Nav.Link href="/home"><p className="bbw_navlink">Home</p></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/money"><p className="bbw_navlink">Money</p></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/handywoman"><p className="bbw_navlink">Handywoman</p></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/legal"><p className="bbw_navlink">Legal</p></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/jobs"><p className="bbw_navlink">Jobs</p></Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/mentalhealth"><p className="bbw_navlink">Mental Health</p></Nav.Link>
            </Nav.Item>
            
        </Nav>
        
          
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarHdg;


