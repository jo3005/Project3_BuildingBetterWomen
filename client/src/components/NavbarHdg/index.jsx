import React from "react";
import "./style.css";
import {Nav,Button} from "react-bootstrap"

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function NavbarHdg() {
  return (
    <Nav
      className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"
      defaultActiveKey="/home" as="ul">
      <h1 className="navbar-brand" href="#">Personal Portfolio</h1>
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
          <Nav.Link href="/portfolio">Website Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/publications">Publications</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/art">Art Folio</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/contacts">Contact Details</Nav.Link>
        </Nav.Item>
          
      </div>

    </Nav>
      
        
    
  );
}

export default Navbar;