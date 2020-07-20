import React from "react";
import "./style.css";
import {Button,ButtonGroup} from "react-bootstrap"


// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
export default function LoadingTopics() {


  return (
 
    <ButtonGroup vertical>
        <Button title="Money" id="moneybtn" className= "landingBtn"  variant="outline-primary" block>Money</Button>
        <Button title="Handywoman" id="handybtn" className= "landingBtn"  variant="outline-primary" block>Handywoman</Button>
        <Button title="Legal" id="legalbtn" className= "landingBtn"  variant="outline-primary" block>Legal</Button>
        <Button title="Job Hunting" id="jobbtn" className= "landingBtn" variant="outline-primary" block>Job Hunting</Button>
        <Button title="Mental Health" id="mentalbtn" className= "landingBtn"  variant="outline-primary" block>Mental Health</Button>
    </ButtonGroup>

  );
}

