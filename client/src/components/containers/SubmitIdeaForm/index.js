import React,{useState,setState} from "react";
import "./style.css";
import {Button,Modal,Form} from "react-bootstrap"
import API from "../../../utils/API";
import ReCAPTCHA from "react-google-recaptcha";
 

export default function SubmitIdeaForm(props) {
    
    const onHide=props.onHide;
    const recaptchaRef = React.useRef();

    const [capOk,setCapOk]=useState(false);
       
    function onChange(value){
        console.log("captcha value:" , value);
        API.checkGoogleCaptcha(value)
        .then((res)=>{
            console.log(res);
            setCapOk(true);
        })
        .catch((err)=>{
            console.log(err);
            setCapOk(false);
        });  
    }
    
    function submitForm(e){
        e.preventDefault();
        const frm_email=e.target.elements['frmemail'].value;
        const frm_reason=e.target.elements['suggestedContentReason'].value
        const frm_heading=e.target.elements['suggestedContentHdng'].value
        const frm_url=e.target.elements['suggestedContentUrl'].value
        
        const frm_html= `Proposer's Email: ${frm_email} <br> 
                        Suggested Heading: ${frm_heading} <br> 
                        Suggested URL: ${frm_url} <br> 
                        Reason for suggestion: ${frm_reason}`;
        
        // Only send email if captcha came back ok
        if(capOk){
            API.sendMail(frm_html).then((res)=>{
                console.log(res);
            }).catch((err)=>{
                console.log(err)
            });
        }        
        
        onHide();
    }


    return (
        <Modal {...props}
            size="lg"
            className="modal-right"
            block
        >

            <Modal.Header closeButton onClick={onHide} >
                <Modal.Title id="contained-modal-title-vcenter">
                    Enter your recommendations
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={submitForm}>
                    <Form.Group controlId="frmemail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="suggestedContentHdng">
                        <Form.Label>Suggested Heading</Form.Label>
                        <Form.Control type="input"  />
                    </Form.Group>

                    <Form.Group controlId="suggestedContentUrl">
                        <Form.Label>Web Link</Form.Label>
                        <Form.Control type="input"  />
                    </Form.Group>
                    
                    <Form.Group controlId="suggestedContentReason">
                        <Form.Label>Reason for Suggestion</Form.Label>
                        <Form.Control as="textarea" rows="5" />
                    </Form.Group>

                    <ReCAPTCHA
                        sitekey= '6LcRALgZAAAAAMWnXkmjb54A0JMt9SNsks1LMadL'
                        onChange={onChange}
                        ref={recaptchaRef}
                    />


                    <Button variant="primary" type="submit" className="submitModBtn" >
                        Submit
                    </Button>
                </Form>
            </Modal.Body>    
            
        </Modal>

    )

    
}