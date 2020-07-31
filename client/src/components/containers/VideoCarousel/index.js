import React,{Component} from "react";

import SectionHeading from "../../basic/SectionHeading"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Iframe from 'react-iframe'
import "./style.css"

export default function VideoCarousel({data}){
    const vdata=data;
    if (vdata.length>0){}
    return (
        <>
            {vdata.length > 0 &&
                <SectionHeading sectionhdg={"Cool Videos"} />}
                    <Carousel className="vidcarousel">
                        {vdata.length > 0 &&
                            vdata.map((video,index)=>{
                                return (
                                    <div key= {index}>
                                        <Iframe
                                            src={video.url} 
                                            className='ytvideo'
                                            position='relative'
                                        />
                                        
                                        
                                    </div>
                                )
                                
                            })}
                </Carousel>
            </>         
        );
            
}