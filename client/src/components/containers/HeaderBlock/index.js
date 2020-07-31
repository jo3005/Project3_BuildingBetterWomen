import React,{useState,setState} from "react";

import {Col,Button,Form} from "react-bootstrap"
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
            <Col md="8">
                <h1 className="hdngtext"> {hdrtext} </h1>
            </Col>
            {/* <Col md="2">
                <Form inline className="searchForm" >
                    <Form.Control type="text" placeholder="Search..."  id="searchbox"/>
                </Form>
            </Col> */}
            <Col md="4"  className="justify-content-right text-right">
                <Button 
                    id="openModalBtn"
                    variant="primary" 
                    onClick={() => setModalShow(true)}
                    >
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