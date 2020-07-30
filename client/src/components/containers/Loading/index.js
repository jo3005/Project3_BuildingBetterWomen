import React from "react";
import "./style.css";
import {Container,Col,Row,Jumbotron,Button,Image,Card,blockquote} from "react-bootstrap"
import LoadingTopics from "../LoadingTopics"
import LoginSignup from "../LoginSignup"


// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
export default function Loading() {


  return (
      <>
      <Container className="landingPage" fluid="true" >
        
          <Jumbotron fluid className="landingjumbo">
            <h1>Building Better Women</h1>
            <blockquote>Empowering women by helping them build their skillset. </blockquote>
            <p><LoginSignup /> </p>
          </Jumbotron>
        
          <LoadingTopics />
        
        
        
        
        
          
        </Container>
        
    </>
  );
}
