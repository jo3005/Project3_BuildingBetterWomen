import React from "react";
import "./style.css";
import {Form} from "react-bootstrap"


export default function AttributeCheckBox(props){
    return (
        <>
            <Form>
              <Form.Check 
                    label={props.tagName}
                    onChange={props.handleChange}
                    checked={props.isChecked}
                    
                    id={"cb_"+ props.whichTag}
                    
                    key={props.tagName}
                    className="tagCheckBox"/>  
            </Form>
                
        </>
    )

}