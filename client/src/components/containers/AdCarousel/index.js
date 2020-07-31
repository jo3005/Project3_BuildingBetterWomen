import React,{Component} from "react";

import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import AdInfo from "../AdInfo";
import SectionHeading from "../../basic/SectionHeading"
import "./style.css"


export default function AdCarousel({data}){
    const addata=data;
    
    return (
        <>
            {addata.length > 0 &&    
                <SectionHeading sectionhdg={"Suppliers"} />}
                    <Carousel className="adcarousel">
                            {addata.length > 0 &&
                                addata.map((ad,index)=>{
                                    return (
                                        <div key= {index}>
                                            <AdInfo data={ad}/>
                                        </div>
                                    )
                                    
                                })}
                    </Carousel>
            
        </>
        );
            
}