import React from "react";
import "./style.css";
import {Button,ButtonGroup} from "react-bootstrap"
import LoadingTopics from "../LoadingTopics"
import LoginSignup from "../LoginSignup"

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
export default function Loading() {


  return (
      <>
       {/*  //Heading */}

        <LoadingTopics />
        
        {/* //Login and signup buttons */}

        <LoginSignup />

    </>
  );
}
