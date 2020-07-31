import React from "react";
import {} from "react-bootstrap"
import ItemList from "../ItemList"
import SectionHeading from "../../basic/SectionHeading"
import "./style.css"

export default function AllObjects(props){
    //console.log("AllObjectsProps:",props)
    return (
        <>
            <SectionHeading sectionhdg="Links and Articles"/>
            <ItemList {...props} className="linksection"/>
        </>    
    )


}