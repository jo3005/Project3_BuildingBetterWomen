import React from "react";
import "./style.css";
import {Container,Col,Row,Jumbotron,Button,Image,Card,blockquote} from "react-bootstrap"
import LoadingTopics from "../LoadingTopics"
import LoginSignup from "../LoginSignup"

import jumbopic from "../../../assets/images/jumbotron_pic.jpg"


// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
export default function Loading() {


  return (
      <>
        <Card className="text-center landing-header-block" fluid  >
          <Card.Img src={jumbopic} fluid/>
          <Card.ImgOverlay fluid>
            <Card.Body>
              <Card.Title><h1>Building Better Women</h1></Card.Title>
              
            <LoginSignup /> 
            </Card.Body>
            
          </Card.ImgOverlay>
        </Card>
        <blockquote className="blockquote">Empowering women after the loss of a partner.</blockquote>
        <Row fluid><Col fluid><Button>Down</Button></Col></Row>
        <Container className="landingPage" fluid justify="center">
          <Row fluid><LoadingTopics /></Row>
          
          
        </Container>
        
    </>
  );
}
