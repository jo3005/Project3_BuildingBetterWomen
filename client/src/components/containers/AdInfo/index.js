import React from "react";

import {Card,ListGroup,Col,Row,Accordion,Button,Image} from "react-bootstrap"
import LikeDislikeBtns from "../LikeDislikeBtns"
import "./style.css"


export default function AdInfo (props){
    const data=props.data;
    //console.log("theseprops",props);
    return (
        <div >
            <Card key={data._id} className="adCards">
                <Row className="logobasebdr">
                    <Col md="2"></Col>
                    <Col md="8" className="btnLDrow imge"><Image  src={data.logoUrl} className="adImage"/></Col>
                    <Col md="2"></Col>
                    
                </Row>
                <Row className="btnLDrow">
                    <Col><LikeDislikeBtns {...props} ></LikeDislikeBtns></Col>
                    <Col><Card.Text className="itemType">{data.type.toUpperCase()}</Card.Text></Col>
                </Row>
                
                <Card.Body className="contentCardsBody">
                    <Row className="noTopMargin flex">
                        
                        
                        <Col md="6"  className="maininfo" > 
                            <div className="leftalign ">
                                {data.headingText.length>0 && <Card.Title className="itemTitle text-left">{data.headingText}</Card.Title>}
                                {data.subtitle.length>0    && <Card.Subtitle className="itemSubtitle text-left">{data.subtitle}</Card.Subtitle>}
                                {data.url.length>0         && <div className="text-left"><a className= "itemUrl text-left" href={data.url} target="_blank">{data.url}</a></div>}
                            </div>
                        </Col>
                        <Col md="6" className="bodyContents">
                                {data.tags.length> 0  && <Card.Text className="tagPrefix text-left" >Providing expertise in: </Card.Text>}
                                {data.tags.length> 0  && 
                                    <ListGroup as="ol" className="taglistgroup text-left" >    
                                        {data.tags.map((tag,index) =>  {
                                        return (
                                                    <Card.Text as="li" className= "itemTag">{tag}</Card.Text>     
                                                    )}
                                        )}
                                    </ListGroup>
                                } 
                        </Col>
                    </Row>    
        
                </Card.Body>
                
                
            </Card>
        </div>
    )
}