import React,{useState,useEffect} from "react";
import HeaderBlock from "../components/containers/HeaderBlock"
import TagList from "../components/containers/TagList"
import AllObjects from "../components/containers/AllObjects"
import {Col,Row,Container} from "react-bootstrap"
import "./style.css"

import "../utils/API"

const testdata=[{
    topic: "money",
    headingText: "heading 1",
    subtitle: "heading 2",
    contentText: "balahsdflsd ;laksjdf;as ashdfas",
    url:"",
    links:[""]
}]




export default function Main ({whichSection}) {
    const taglist=["tag1","tag2","tag3"]

    const [pageObjects,setPageObjects]=useState([]);
    const [filteredObjects,setFilteredObjects]=useState(testdata);
    const [tags,setTags]=useState([]);
    const [selectedTags,setSelectedTags]=useState([]);
    
    async function getPageObjects(){
        return []
    }
    
    async function getFilteredObjects(selectedTags){
        return (testdata)
    }
    
    async function getTags(){
        return []
    }
    
    async function getSelectedTags(){
        return []
    }


    /* useEffect(()=>{
        getPageObjects().then((results)=> {
            setPageObjects(results.data)
        })
    },[]); */
  
    useEffect(()=>{
      getFilteredObjects().then((results)=> {
          setFilteredObjects(testdata)
      })
    },[]);
  
    /* useEffect(()=>{
      getTags().then((results)=> {
          setTags(results.data)
      })
    },[]);
  
    useEffect(()=>{
      getSelectedTags().then((results)=> {
          setSelectedTags(results.data)
      })
    },[]);  */



    return (
        <>
            <Container fluid >
                <Row>
                    <h1> Content: {whichSection} </h1>
                    <HeaderBlock />
                </Row>
                {
                    <Row>
                        <Col md={{ span: 2, offset: 0 }} className="taglist"> <TagList tags={taglist} /> </Col>
                        <Col md={{ span: 9, offset: 0 }} className="results"> <AllObjects data={filteredObjects}/> </Col>
                    </Row>
                }
            </Container>
            
            
            
        </>
    )
}