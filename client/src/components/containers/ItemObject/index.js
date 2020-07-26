import React from "react";

import {Card,ListGroup,Col,Row} from "react-bootstrap"
import LikeDislikeBtns from "../LikeDislikeBtns"
import "./style.css"


export default function ItemObject (props){
    const data=props.data;
    return (
        <Card fluid="true" >
            <Card.Header className="container noTopMargin" >
                
                <Row className="noTopMargin flex"> 
                    <Col md="8"  className="justify-content-left" > 
                        {data.logoUrl.length>0 && <Card.Img src={data.logoUrl} className="itemLogo"/>}
                    </Col>
                    <Col md="2" className="likedislikebtns justify-content-right"  > 
                        <LikeDislikeBtns {...props} ></LikeDislikeBtns>
                    </Col>
                </Row>
                
                
                
            </Card.Header>
            <Card.Body>
                <Col >
                    <Row>
                        <Col>{data.headingText.length>0 && <Card.Title className="itemTitle">{data.headingText}</Card.Title>}</Col>
                        <Col xs="4">
                            <Card.Text className="itemType">{data.type}</Card.Text> 
                        </Col>
                    </Row>
                    
                    
                    {data.subtitle.length>0    && <Card.Subtitle className="itemSubtitle">{data.subtitle}</Card.Subtitle>}
                    {data.contentText.length>0 && <Card.Text className="itemText">{data.contentText}</Card.Text>}
                    {data.url.length>0         && <Card.Link className= "itemUrl" href={data.url} target="_blank">{data.url}</Card.Link>}
                    {data.links.length > 0     &&
                        (<ListGroup variant="flush">
                            {data.links.map((link,index) =>  {
                                return (<ListGroup.Item key={link._id} className= "itemLink">
                                        <Card.Link href="#">{link}</Card.Link>     
                                    </ListGroup.Item>)
                            })}      
                        </ListGroup>)}
                    {data.tags.length > 0     &&
                    (<ListGroup variant="horizontal" fluid="true">
                        {data.tags.map((tag,index) =>  {
                            return (<ListGroup.Item key={index} className= "itemTag">
                                    <Card.Text >{tag}</Card.Text>     
                                </ListGroup.Item>)
                        })}      
                    </ListGroup>)} 
                    </Col>   
            </Card.Body>
            
        </Card>
        
    )
}