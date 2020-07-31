import React,{Component} from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./style.css"

export default function SectionHeading(props){

    return (
        <>
            <h3 className="sectionName">{props.sectionhdg}</h3>
        </>
        );
            
}