import React from "react";
import "./style.css";
import {InputGroup} from "react-bootstrap"

export default function AttributeCheckBox(props){
    return (
        <>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </InputGroup.Prepend> 
                <InputGroup.Text>{props.tagName}</InputGroup.Text>   
            </InputGroup>    
        </>
    )

}