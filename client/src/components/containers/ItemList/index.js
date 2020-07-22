import React from "react";
import {Card,ListGroup} from "react-bootstrap"
import ItemObject from "../ItemObject"

import "./style.css"

export default function ItemList(props){
    console.log(props)
    return (
        <ListGroup >
            {props.data.length > 0 &&
                props.data.map(data=>{
                    return (<ItemObject data={data}/>)
                })}
        </ListGroup>
    )
}