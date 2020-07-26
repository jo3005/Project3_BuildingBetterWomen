import React from "react";

import {ButtonGroup,Button} from "react-bootstrap"
import "./style.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp,faThumbsDown} from '@fortawesome/free-solid-svg-icons';

export default function LikeDislikeBtns(props){
    const data=props.data;
    
    return (
        
            <ButtonGroup >
                <Button size="sm" variant="outline" onClick={props.onThumbsUpClick}>
                    <FontAwesomeIcon icon={faThumbsUp} className="fontAwesomeIcons"></FontAwesomeIcon>
                        {data.likes} 
                </Button>
                <Button size="sm" variant="outline" onClick={props.onThumbsDownClick}>
                    <FontAwesomeIcon icon={faThumbsDown} className="fontAwesomeIcons"></FontAwesomeIcon>
                        {data.dislikes} 
                </Button>
            </ButtonGroup>
             
        
    )
}