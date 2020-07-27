import React from "react";
import "./style.css";
import {Button,ButtonGroup,Image} from "react-bootstrap"
import moneypic from "../../../assets/images/jumbotron_pic.jpg"
import handypic from "../../../assets/images/jumbotron_pic.jpg"
import legalpic from "../../../assets/images/jumbotron_pic.jpg"
import mentalpic from "../../../assets/images/jumbotron_pic.jpg"
import jobpic from "../../../assets/images/jumbotron_pic.jpg"

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
export default function LoadingTopics() {
  return (
 
    <ButtonGroup vertical justified >
        <Button title="Money" id="moneybtn" className= "landingBtn"   href="/money" style={{backgroundImage: moneypic}} block > Money Matters</Button>
        <Button title="Handywoman" id="handybtn" className= "landingBtn"   href="/handywoman" block>Be a Handywoman</Button>
        <Button title="Legal" id="legalbtn" className= "landingBtn"  href="/legal" block>Legal Stuff</Button>
        <Button title="Job Hunting" id="jobbtn" className= "landingBtn" href="/jobs" block>Job Hunting skills</Button>
        <Button title="Mental Health" id="mentalbtn" className= "landingBtn"  href="/mentalhealth" block>Mental Health</Button>
    </ButtonGroup>

  );
}

