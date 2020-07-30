import React,{useState,setState} from "react";

import {Col,Button} from "react-bootstrap"
import SubmitIdeaForm from "../SubmitIdeaForm"
import "./style.css"
 

export default function HeaderBlock (props){
    const whichpage=props.whichSection
    const [modalShow, setModalShow] = useState(false);

    let hdrtext="";
    switch(whichpage) {
        case 'finances':
            hdrtext='Managing Your Finances';
            break;
        case 'practical':
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
            <Col md="11">
                <h1 className="hdngtext"> {hdrtext} </h1>
            </Col>
            <Col md="1"  >
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Suggest Content
                </Button>
                <SubmitIdeaForm 
                    whichSection={whichpage}
                    show={modalShow}
                    onHide={()=> setModalShow(false)}
                ></SubmitIdeaForm>
            </Col>
        </>
    )
    
}