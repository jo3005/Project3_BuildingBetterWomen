import React from "react";
import "./style.css";
import AttributeCheckBox from "../../basic/AttributeCheckBox"
import {Container,ListGroup,Button} from "react-bootstrap"

export default function AttributeList({taglist,handleChange,checkAll,uncheckAll,runTagFilter}){
    //console.log(taglist);
    return (
        <>
            <Container className="taglist">
                <ListGroup>
                    {taglist.map((tag,index)=>{
                        return(
                            <ListGroup.Item key={index.toString()}> 
                                <AttributeCheckBox 
                                    tagName={tag.tagName}
                                    isChecked={tag.isChecked}
                                    whichTag={index}
                                    handleChange={handleChange}/>
                            </ListGroup.Item>    
                            
                        )
                    })}
                </ListGroup>
                <ListGroup variant="horizontal">
                    <Button size="sm" onClick={checkAll}>Check All</Button>
                    <Button size="sm" onClick={uncheckAll}>Uncheck All</Button>
                    <Button size="sm" onClick={runTagFilter}>Filter Page</Button>
                </ListGroup>
                
            </Container>    
        </>
    )

}