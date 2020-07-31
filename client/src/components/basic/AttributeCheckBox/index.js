import React from "react";
import "./style.css";
import {Form} from "react-bootstrap"


export default function AttributeCheckBox(props){
    //console.log(props.handleChange)
    return (
        <>
            <Form className="tagListings">
              <Form.Check key={props.tagName} 
                        label={props.tagName} 
                        className="tagCheckBox" 
                        onChange={props.handleChange} 
                        id={"cb_"+ props.whichTag} 
                        checked={props.isChecked}
                        
                        
                />
                
            </Form>
                
        </>
    )

}