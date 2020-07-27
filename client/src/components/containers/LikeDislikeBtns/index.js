import React from "react";

import {ButtonGroup,Button} from "react-bootstrap"
import "./style.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp,faThumbsDown} from '@fortawesome/free-solid-svg-icons';

export default function LikeDislikeBtns(props){
    const data=props.data;
    
    return (
        
            <ButtonGroup >
                <Button size="sm" variant="outline" onClick={props.onThumbsUpClick} id={`lk_${data._id}`} value={data.likes}>
                    <FontAwesomeIcon icon={faThumbsUp} className="fontAwesomeIcons" id={`fl_${data._id}`} value={data.likes}></FontAwesomeIcon>
                        {data.likes} 
                </Button>
                <Button size="sm" variant="outline" onClick={props.onThumbsDownClick} id={`dl_${data._id}`} value={data.dislikes} >
                    <FontAwesomeIcon icon={faThumbsDown} className="fontAwesomeIcons"onClick={props.onThumbsDownClick} id={`fd_${data._id}`} value={data.dislikes}></FontAwesomeIcon>
                        {data.dislikes} 
                </Button>
            </ButtonGroup>
                
        
    )
}