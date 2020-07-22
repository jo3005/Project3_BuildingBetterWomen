import React,{useState,useEffect} from "react";
import HeaderBlock from "../components/containers/HeaderBlock"
import TagList from "../components/containers/TagList"
import {Col,Row,Container} from "react-bootstrap"
import "./style.css"

export default function Main ({whichSection}) {
    const taglist=["tag1","tag2","tag3"]

    const [pageObjects,setPageObjects]=useState([{}]);
    const [filteredObjects,setFilterObjects]=useState([{}]);
    const [tags,setTags]=useState([]);
    const [selectedTags,setSelectedTags]=useState([]);
    
    /* useEffect(()=>{
        getPageObjects().then((results)=> {
            setPageObjects(results.data)
        })
    },[]);
  
    useEffect(()=>{
      getFilteredObjects().then((results)=> {
          setFilteredObjects(results.data)
      })
    },[]);
  
    useEffect(()=>{
      getTags().then((results)=> {
          setTags(results.data)
      })
    },[]);
  
    useEffect(()=>{
      selectedTags().then((results)=> {
          setSelectedTags(results.data)
      })
    },[]); */



    return (
        <>
            <Container fluid >
                <Row>
                    <h1> Content: {whichSection} </h1>
                    <HeaderBlock />
                </Row>
                <Row>
                    <Col md={{ span: 2, offset: 0 }} className="taglist"><TagList tags={taglist} /> </Col>
                    <Col md={{ span: 9, offset: 0 }} className="results"> </Col>
                </Row>
            </Container>
            
            
            
        </>
    )
}