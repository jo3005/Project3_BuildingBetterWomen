import React from "react";
import {ListGroup, Accordion} from "react-bootstrap"
import ItemObject from "../ItemObject"

import "./style.css"

export default function ItemList(props){
    //console.log("ItemListProps",props)
    return (
       
        <ListGroup className="linksection">
            <Accordion className="linkaccordion">
                {props.data.length > 0 &&
                    props.data.map((data,index)=>{
                        return (<ItemObject key={index}
                                    data={data} 
                                    onThumbsUpClick={props.onThumbsUpClick} 
                                    onThumbsDownClick={props.onThumbsDownClick} 
                                    className="accordionItem"
                                />)
                    })}
            </Accordion>
        </ListGroup>
        
    )
}