import React,{useState,useEffect} from "react";
import HeaderBlock from "../components/containers/HeaderBlock"
import TagList from "../components/containers/TagList"
import AllObjects from "../components/containers/AllObjects"
import {Col,Row,Container} from "react-bootstrap"
import "./style.css"

//import "../utils/API"
import API from "../utils/API"
//import { set } from "lodash";

export default function Main ({whichSection}) {

    const [pageObjects,setPageObjects]=useState([]);
    const [allPageObjects,setAllPageObjects]=useState([]);
    const [tags,setTags]=useState([]);
    const [types,setTypes]=useState([]);
   
    let alltaglist=[];

    async function getInitialData(newObjects=[]) {
        function getAllTags(newObjects=[]){
            if(newObjects === undefined || newObjects.length === 0 ) return;
    
            let tagsArray=tags;
            let tagsObj=[];
            let allTagSet=new Set("");
            //console.log("for tags:", newObjects);
            
            tagsArray=newObjects.map((obj,index)=> obj.tags); 
            //get unique list of tags
            tagsArray.forEach((values,index) => {
                values.forEach((value,index) => {
                    if(value!== "") allTagSet.add(value);
                })  
            });
            //create object from list and set isChecked to true initially
            Array.from(allTagSet.values()).forEach((tag)=>{
                if(tag!== "") tagsObj.push({tagName:tag, isChecked:true})
            });
            return (tagsObj);
        };
    
        function getAllTypes(newObjects=[]){
            if(newObjects === undefined || newObjects.length === 0 ) return;
        
            let typesArray=types;
            let typesObj=[];
            let allTypesSet=new Set("");
            //console.log("for tags:", newObjects);
            typesArray=newObjects.map((obj,index)=> obj.type); 
            typesArray.forEach((value,index) => {if(value!== "") allTypesSet.add(value);})
            //create object from list and set isChecked to true initially
            Array.from(allTypesSet.values()).forEach((type)=>{
                if(type!== "") typesObj.push({tagName:type, isChecked:true})
            }); 
            
            //create array from set of types
            console.log(typesObj);
            return (typesObj);
        };
        
        if(newObjects ===[] ) return;
        API.getAllTopicData(whichSection)
            .then(apiresults=>{
                setPageObjects(apiresults.data);
                setAllPageObjects(apiresults.data);
                console.log("got initial data",allPageObjects);
                
                //console.log("data:", results.data);
                alltaglist=getAllTags(apiresults.data);
                
                const newtypes=getAllTypes(apiresults.data);
                console.log("newtypes",newtypes)
                setTypes(newtypes);
                return alltaglist;
            })
            .then((alltaglist)=>{
                setTags(alltaglist);
                console.log("got initial taglist",tags);
                return(allPageObjects.data)
            })
            .then((obj)=>{
                const newtypes=getAllTypes(allPageObjects.data.data);
                setTypes(newtypes);
            })
            .catch(err => console.log(err));
    };

    

    useEffect(()=>{
        getInitialData(allPageObjects)
    },[]);

    useEffect(()=>{
        runTagFilter();
        runTypeFilter();
        
    },[tags,types]);

    function runTagFilter(){
        let data=[...allPageObjects];    
        data=data.filter((record)=>{
            console.log("filtering data",tags)
            let includeRecord=false;

            //look for matches between checked tags and elements of tag array in dataset
            tags.forEach(tag=>{
                if(tag.isChecked){
                    if(record.tags.includes(tag.tagName)){
                        console.log("found a match: ", tag.tagName, record.headingText )
                        includeRecord= true;
                    }
                }
            })
            return (includeRecord);
        });
        //console.log(data);
        setPageObjects(data);
    }
    function runTypeFilter(){
        let data=[...allPageObjects];    
        data=data.filter((record)=>{
            console.log("filtering data",types)
            let includeRecord=false;

            //look for matches between checked tags and elements of tag array in dataset
            types.forEach(tag=>{
                if(tag.isChecked){
                    if(record.type===(tag.tagName)){
                        console.log("found a match: ", tag.tagName, record.headingText )
                        includeRecord= true;
                    }
                }
            })
            return (includeRecord);
        });
        //console.log(data);
        setPageObjects(data);
    }
    
    function handleTagCbClick(e) { 
        //console.log("handleCbClick - on checkbox change") 
        function invertCbTagArray(index){
            let newset=[...tags];
            newset[index].isChecked=!newset[index].isChecked;
            setTags(newset);
            //console.log("just changed tagset to:",newset)
        }
        
        const index=Number(e.target.id.substring(3,4));
        
        invertCbTagArray(index);       
        return index;
    }

    function handleTypeCbClick(e) { 
        //console.log("handleCbClick - on checkbox change") 
        function invertCbTypeArray(index){
            let newset=[...types];
            newset[index].isChecked=!newset[index].isChecked;
            setTypes(newset);
            //console.log("just changed tagset to:",newset)
        }
        //e.preventDefaults();
        const index=Number(e.target.id.substring(3,4));
        
        invertCbTypeArray(index);       
        return index;
    }

    function onThumbsUpClick () {
        console.log("clicked thumbs up")
        };
    function onThumbsDownClick () {
        console.log("clicked thumbs up")
        };
    
    function handleCheckAll() {
        console.log("handleCheckAll")
        const newtags = tags.map(onetag=>{
            return ({tagName: onetag.tagName, 
                    isChecked:true})
            });
        setTags(newtags);
        console.log(tags);
    };

    function handleUncheckAll() {
        console.log("handleUncheckAll")
        const newtags = tags.map(onetag=>{
            return ({tagName: onetag.tagName, 
                    isChecked:false})
            });
        setTags(newtags);
        console.log(tags);
    };
    
    function handleTypeCheckAll() {
        console.log("handleCheckAll")
        const newtags = types.map(onetag=>{
            return ({tagName: onetag.tagName, 
                    isChecked:true})
            });
        setTypes(newtags);
        console.log(tags);
    };

    function handleTypeUncheckAll() {
        console.log("handleUncheckAll")
        const newtags = types.map(onetag=>{
            return ({tagName: onetag.tagName, 
                    isChecked:false})
            });
        setTypes(newtags);
        console.log(types);
    };
    

    return (
        <>
            <Container fluid >
                <Row>
                    <HeaderBlock whichSection={whichSection}/>
                </Row>
                
                <Row>
                    {tags !== undefined && 
                        <Col md={{ span: 2, offset: 0 }} className="taglist"> 
                            <Row>
                            <TagList 
                                taglist={tags}
                                handleChange={handleTagCbClick}
                                checkAll={handleCheckAll}
                                uncheckAll={handleUncheckAll}
                                runTagFilter={runTagFilter}
                                title={"Topic"}
                                /> 
                            </Row>
                            <Row>
                            <TagList 
                                taglist={types}
                                handleChange={handleTypeCbClick}
                                checkAll={handleTypeCheckAll}
                                uncheckAll={handleTypeUncheckAll}
                                runTagFilter={runTypeFilter}
                                title={"Type"}
                                />  
                            </Row>
                        </Col>}
                    {pageObjects!== undefined && 
                        <Col md={{ span: 10, offset: 0 }} className="results"> 
                            <AllObjects 
                                data={pageObjects}
                                onThumbsUpClick={onThumbsUpClick}
                                onThumbsDownClick={onThumbsDownClick}   
                            /> 
                        </Col>
                    }
                </Row>
                
            </Container>
            
            
            
        </>
    )
}