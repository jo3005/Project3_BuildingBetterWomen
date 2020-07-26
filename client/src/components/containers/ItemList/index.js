import React from "react";
import {ListGroup} from "react-bootstrap"
import ItemObject from "../ItemObject"

import "./style.css"

export default function ItemList(props){
    //console.log("ItemListProps",props)
    return (
        <ListGroup >
            {props.data.length > 0 &&
                props.data.map((data)=>{
                    return (<ItemObject key={data._id} data={data} fns={props.fns}/>)
                })}
        </ListGroup>
    )
}