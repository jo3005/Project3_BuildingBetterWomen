import React from "react";

//import {Col,Row,Container} from "react-bootstrap"
import "./style.css"
 

export default function HeaderBlock ({whichSection}){
    let hdrtext="";
    switch(whichSection) {
        case 'finances':
            hdrtext='Managing Your Finances';
            break;
        case 'handywoman':
            hdrtext='Practical Skills';
            break;
        case 'legal':
            hdrtext='Legal Matters';
            break;
        case 'jobs':
            hdrtext='Jobs & Career Matters';
            break;
        case 'mentalhealth':
            hdrtext='Looking After Your Mental Health';
            break;
        default:
    }
    

    return (
        <>
            <h1 className="hdngtext"> {hdrtext} </h1>
        </>
    )
    
}