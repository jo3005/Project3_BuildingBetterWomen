import React from "react";
import "./style.css";
import {Container,Col,Row} from "react-bootstrap"
import LoadingTopics from "../LoadingTopics"
import LoginSignup from "../LoginSignup"

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
export default function Loading() {


  return (
      <>
        <Container className="landingPage" fluid justify="center">
          <Col className="landingPage" >
              <Row>
                <p>Welcome to the Building Better Women website. Our aim is to help empower women by building their practical skills after the loss of a partner.</p>
              </Row>
              <Row>
                <LoadingTopics />
              </Row>
              <Row>
                {/* //Login and signup buttons */}
                <LoginSignup />     
              </Row>
            </Col>
        </Container>
        
    </>
  );
}
