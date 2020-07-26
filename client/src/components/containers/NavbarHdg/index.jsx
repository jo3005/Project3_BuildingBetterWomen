import React from "react";
import "./style.css";
import {Nav, Button,Col} from "react-bootstrap"

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function NavbarHdg(props) {
  const whichPage=`/${props.activePage}`;
  return (
    
    <Nav
      className="navbar-bbw navbar-expand-lg sticky-top"
      defaultActiveKey={whichPage} as="ul" justify="right">
        <Col> 
          <h1 className="navbar-brand" href="#">    Building Better Women</h1>
        
        </Col>
        <Col>
          <Button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation" 
          >
          <span className="navbar-toggler-icon"></span>
          
          </Button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Nav.Item as="li">
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/money">Money</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/handywoman">Handywoman</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/legal">Legal</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/jobs">Jobs</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/mentalhealth">Mental Health</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/contacts">Contact Details</Nav.Link>
            </Nav.Item>
          
          </div>
        </Col>
      </Nav>
  );
}

export default NavbarHdg;