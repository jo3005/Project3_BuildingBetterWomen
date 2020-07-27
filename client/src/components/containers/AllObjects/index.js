import React from "react";
import {} from "react-bootstrap"
import ItemList from "../ItemList"

import "./style.css"

export default function AllObjects(props){
    //console.log("AllObjectsProps:",props)
    return (
        <ItemList {...props}/>
    )


}