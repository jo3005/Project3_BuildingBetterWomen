import React from "react";
import "./style.css";
import AttributeCheckBox from "../../basic/AttributeCheckBox"
import {Container,ListGroup,Button,DropdownButton,ButtonGroup,Dropdown} from "react-bootstrap"

export default function AttributeList({taglist,handleChange,checkAll,uncheckAll,title}){
    //console.log(taglist);
    return (
        
        <div className="taglist">
            <DropdownButton 
                variant = "secondary"
                size="sm"
                as="ul" 
                title={`Filter by ${title}`} 
                id={`bg-nested-dropdown-${title}`}
                collapseonselect="false" 
                >
            
                {taglist.map((tag,index)=>{
                    return(
                        <Dropdown.Item key={index}
                            as="li" 
                            eventKey={index.toString()} 
                            collapseonselect="false"  
                            className="taglistElement">

                            <AttributeCheckBox 
                                tagName={tag.tagName}
                                isChecked={tag.isChecked}
                                whichTag={index}
                                handleChange={handleChange}
                                
                                />
                                
                        </Dropdown.Item>    
                        
                    )
                })}
            <Dropdown.Divider />
            <ListGroup variant="horizontal">
                <Button  onClick={checkAll} className="filterListBtns">Check All</Button>
                <Button  onClick={uncheckAll} className="filterListBtns">Uncheck All</Button>
                
            </ListGroup>
            </DropdownButton>
        </div>    
       
    )

}