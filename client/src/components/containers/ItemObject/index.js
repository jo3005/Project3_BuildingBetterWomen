import React from "react";

import {Card,ListGroup,Col,Row,Accordion,Button} from "react-bootstrap"
import LikeDislikeBtns from "../LikeDislikeBtns"
import "./style.css"


export default function ItemObject (props){
    const data=props.data;
    //console.log("theseprops",props);
    return (
        <div >
            <Card fluid="true" key={data._id} className="contentCards">
                <Card.Header className="noTopMargin" fluid="true">
                    <Accordion.Toggle as={Button} variant="link" eventKey={data._id}>
                        <Row className="noTopMargin flex">
                            <Col md="3" className="text-left">
                                
                                <Card.Text className="itemType">{data.type.toUpperCase()}</Card.Text>  
                                    
                            </Col>
                            <Col md="2"  className="" > 
                                {data.logoUrl.length>0 && <Card.Img src={data.logoUrl} className="itemLogo"/>}
                                
                            </Col>
                            <Col md="7"  className="maininfo" > 
                                {data.headingText.length>0 && <Card.Title className="itemTitle">{data.headingText}</Card.Title>}
                                {data.subtitle.length>0    && <Card.Subtitle className="itemSubtitle">{data.subtitle}</Card.Subtitle>}
                                {data.url.length>0         && <Card.Link className= "itemUrl" href={data.url} target="_blank">{data.url}</Card.Link>}
                            </Col>
                            
                        </Row>
                        
                    </Accordion.Toggle>
                </Card.Header>
                <Row className="btnLDrow"><LikeDislikeBtns {...props} ></LikeDislikeBtns></Row>
                <Accordion.Collapse eventKey={data._id}>
                    <Card.Body className="contentCardsBody">
                            <Row>
                                <Col className="bodyContents">
                                    {data.contentText.length>0 && <Card.Text className="itemContentText">{data.contentText}</Card.Text>}
                                </Col>
                            </Row>
                            <Row>
                                
                                <Col className="bodyContents">
                                    {data.links.length > 0     &&
                                            (<ListGroup as="ol" variant="flush">
                                                {data.links.map((link,index) =>  {
                                                    return (<ListGroup.Item key={link && index} className= "itemLink">
                                                            <Card.Link href={link} className= "itemLink">{link}</Card.Link>     
                                                        </ListGroup.Item>)
                                                })}      
                                            </ListGroup>)}
                                </Col>
                            </Row>
            
                    </Card.Body>
                </Accordion.Collapse>
                
            </Card>
        </div>
    )
}