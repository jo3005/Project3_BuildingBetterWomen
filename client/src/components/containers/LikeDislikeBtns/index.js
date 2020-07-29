import React from "react";

import {ButtonGroup,Button,Badge} from "react-bootstrap"
import "./style.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp,faThumbsDown} from '@fortawesome/free-solid-svg-icons';

export default function LikeDislikeBtns(props){
    const data=props.data;
    
    return (
        
            <ButtonGroup >
                <Button size="sm" variant="outline" type="submit" onClick={props.onThumbsUpClick} id={`lk_${data._id}`} value={data.likes} className="ldbuttons">
                    <FontAwesomeIcon as="button" icon={faThumbsUp} className="fontAwesomeIcons" id={`fl_${data._id}`} value={data.likes}></FontAwesomeIcon>
                    <a><Badge variant="light">{data.likes}</Badge></a>
                </Button>
                <Button size="sm" variant="outline" type="submit" onClick={props.onThumbsDownClick} id={`dl_${data._id}`} value={data.dislikes} className="ldbuttons">
                    <FontAwesomeIcon as="button" icon={faThumbsDown} className="fontAwesomeIcons" onClick={props.onThumbsDownClick} id={`fd_${data._id}`} 
                        value={data.dislikes}></FontAwesomeIcon>
                    <a><Badge variant="light" >{data.dislikes}</Badge></a> 
                </Button>
            </ButtonGroup>

        
    )
}