import React from "react";
import "./style.css";
import AttributeCheckBox from "../../basic/AttributeCheckBox"
import {Container,ListGroup} from "react-bootstrap"

export default function AttributeList({tags=[]}){
    
    return (
        <>
            <Container className="taglist">
                <ListGroup>
                    {tags.map(tag=>{
                        return(
                            <ListGroup.Item> 
                                <AttributeCheckBox tagName={tag}/>
                            </ListGroup.Item>    
                            
                        )
                    })}
                </ListGroup>
                
            </Container>    
        </>
    )

}