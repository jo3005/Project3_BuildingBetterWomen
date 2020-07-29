import React from "react";
import "./style.css";
import {Button,ButtonGroup,Image} from "react-bootstrap"


// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
export default function LoadingTopics() {
  return (
 
    <ButtonGroup vertical justified >
        <Button title="Money" id="moneybtn" className= "landingBtn"   href="/money"  > Money Matters</Button>
        <Button title="Handywoman" id="handybtn" className= "landingBtn"   href="/handywoman" >Be a Handywoman</Button>
        <Button title="Legal" id="legalbtn" className= "landingBtn"  href="/legal" >Legal Stuff</Button>
        <Button title="Job Hunting" id="jobbtn" className= "landingBtn" href="/jobs" >Job Hunting skills</Button>
        <Button title="Mental Health" id="mentalbtn" className= "landingBtn"  href="/mentalhealth" >Mental Health</Button>
    </ButtonGroup>

  );
}

