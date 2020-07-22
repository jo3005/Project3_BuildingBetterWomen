import React from "react";

import {Card,ListGroup} from "react-bootstrap"
import "./style.css"

export default function ItemObject ({data}){
    
    return (
        <Card fluid="true" >
            <Card.Body>
                {data.headingText.length>0 && <Card.Title className="itemTitle">{data.headingText}</Card.Title>}
                {data.subtitle.length>0    && <Card.Subtitle className="itemSubtitle">{data.subtitle}</Card.Subtitle>}
                {data.contentText.length>0 && <Card.Text className="itemText">{data.contentText}</Card.Text>}
                {data.url.length>0         && <Card.Link className= "itemUrl">{data.url}</Card.Link>}
                {data.links.length > 0     &&
                    (<ListGroup variant="flush">
                        {data.links.map(link =>  {
                            return (<ListGroup.Item className= "itemLink">
                                    <Card.Link href="#">{link}</Card.Link>     
                                </ListGroup.Item>)
                        })}      
                    </ListGroup>)}
            </Card.Body>
        </Card>
    )
}