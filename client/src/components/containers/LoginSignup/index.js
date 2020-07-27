import React from "react";
import "./style.css";
import {Button} from "react-bootstrap"

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
export default function Loading() {


  return (
      <>
        {/* //Login and signup buttons */}
        <Button id="login" href="/login">Browse </Button>
        <Button id="login" href="/login">Login </Button>
       

    </>
  );
}
