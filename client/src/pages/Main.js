import React,{useState,useEffect} from "react";
import HeaderBlock from "../components/containers/HeaderBlock"
import TagList from "../components/containers/TagList"
import AllObjects from "../components/containers/AllObjects"
import AdCarousel from "../components/containers/AdCarousel"
import VideoCarousel from "../components/containers/VideoCarousel"
import {Col,Row,Container,Image} from "react-bootstrap"
import "./style.css"

//import "../utils/API"
import API from "../utils/API"
import lodash from "lodash";

export default function Main ({whichSection}) {

    const [pageObjects,setPageObjects]=useState([]);
    const [pageSuppliers,setPageSuppliers]=useState([]);
    const [pageVideos,setPageVideos]=useState([]);
    
    const [allPageObjects,setAllPageObjects]=useState([]);
    const [allPageSuppliers,setAllPageSuppliers]=useState([]);
    const [allPageVideos,setAllPageVideos]=useState([]);

    const [allObjects,setAllObjects]=useState([]);
    

    
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
            //console.log(typesObj);
            return (typesObj);
        };
        
        //Main function starts here
        //Don't do this if we already have called the API and have data - stops repeat calls 
        if(newObjects ===[] ) return;
        
        //Get page data from Mongo via api calls
        API.getAllTopicData(whichSection)
            .then(apiresults=>{
                console.log(apiresults);
                
                const supplierTypes=['approved supplier','web store','suggested supplier','commercial supplier','advertisement'];
                const videoTypes = ['youtube video']
                const specialTypes=supplierTypes.concat(videoTypes);
                let alldata=apiresults.data;
                setAllObjects(alldata);

                //console.log("got initial data",allPageObjects);
                
                //filter out suppliers
                let allinfodata=lodash.filter(alldata,((value,index,collection)=>{
                     return(!specialTypes.includes(value.type.toLowerCase()))   
                }));

                
                let allads=lodash.filter(alldata,((value,index,collection)=>{
                    return(supplierTypes.includes(value.type.toLowerCase()))   
                }));

                let videos=lodash.filter(alldata,((value,index,collection)=>{
                    return(videoTypes.includes(value.type.toLowerCase()))   
                }));

                setPageObjects(allinfodata);
                setAllPageObjects(allinfodata)
                setPageSuppliers(allads);
                setAllPageSuppliers(allads);
                setPageVideos(videos);
                setAllPageVideos(videos);
                
                alltaglist=getAllTags(allinfodata);
                
                const newtypes=getAllTypes(alldata);
                //console.log("newtypes",newtypes)
                setTypes(newtypes);
                return alltaglist;
            })
            .then((alltaglist)=>{
                setTags(alltaglist);
                //console.log("got initial taglist",tags);
                return(allPageObjects.data)
            })
            .catch(err => console.log(err));
    };

    

    useEffect(()=>{
        getInitialData(allPageObjects)
    },[]);

    useEffect(()=>{
        runTagFilter();
        runTypeFilter();
        
    },[tags,types,allPageObjects]);

    //Filters all page objects by the selection in the "Filter by Topic" dropdown box
    function runTagFilter(){
        let data=[...allPageObjects];    
        data=data.filter((record)=>{
            //console.log("filtering data",tags)
            let includeRecord=false;

            //look for matches between checked tags and elements of tag array in dataset
            tags.forEach(tag=>{
                if(tag.isChecked){
                    if(record.tags.includes(tag.tagName)){
                        //console.log("found a match: ", tag.tagName, record.headingText )
                        includeRecord= true;
                    }
                }
            })
            return (includeRecord);
        });
        //console.log(data);
        setPageObjects(data);
        
        data=[...allPageSuppliers];    
        data=data.filter((record)=>{
            //console.log("filtering data",tags)
            let includeRecord=false;

            //look for matches between checked tags and elements of tag array in dataset
            tags.forEach(tag=>{
                if(tag.isChecked){
                    if(record.tags.includes(tag.tagName)){
                        //console.log("found a match: ", tag.tagName, record.headingText )
                        includeRecord= true;
                    }
                }
            })
            return (includeRecord);
        });
        //console.log(data);
        setPageSuppliers(data);

        data=[...allPageVideos];    
        data=data.filter((record)=>{
            //console.log("filtering data",tags)
            let includeRecord=false;

            //look for matches between checked tags and elements of tag array in dataset
            tags.forEach(tag=>{
                if(tag.isChecked){
                    if(record.tags.includes(tag.tagName)){
                        //console.log("found a match: ", tag.tagName, record.headingText )
                        includeRecord= true;
                    }
                }
            })
            return (includeRecord);
        });
        //console.log(data);
        setPageVideos(data);
    };

    //Filters all page objects by the selection in the "filter by Tag" dropdown box
    function runTypeFilter(){
        let data=[...allPageObjects];    
        data=data.filter((record)=>{
            //console.log("filtering data",types)
            let includeRecord=false;

            //look for matches between checked tags and elements of tag array in dataset
            types.forEach(tag=>{
                if(tag.isChecked){
                    if(record.type===(tag.tagName)){
                        //console.log("found a match: ", tag.tagName, record.headingText )
                        includeRecord= true;
                    }
                }
            })
            return (includeRecord);
        });
        //console.log(data);
        setPageObjects(data);
        
        data=[...allPageSuppliers];    
        data=data.filter((record)=>{
            //console.log("filtering data",types)
            let includeRecord=false;

            //look for matches between checked tags and elements of tag array in dataset
            types.forEach(tag=>{
                if(tag.isChecked){
                    if(record.type===(tag.tagName)){
                        //console.log("found a match: ", tag.tagName, record.headingText )
                        includeRecord= true;
                    }
                }
            })
            return (includeRecord);
        });
        //console.log(data);
        setPageSuppliers(data);
        data=[...allPageVideos];    
        data=data.filter((record)=>{
            //console.log("filtering data",types)
            let includeRecord=false;

            //look for matches between checked tags and elements of tag array in dataset
            types.forEach(tag=>{
                if(tag.isChecked){
                    if(record.type===(tag.tagName)){
                        //console.log("found a match: ", tag.tagName, record.headingText )
                        includeRecord= true;
                    }
                }
            })
            return (includeRecord);
        });
        //console.log(data);
        setPageVideos(data);
    }
    
    // code that executes when a checkbox in the 'filter by topic' dropdown list is changed
    function handleTagCbClick(e) { 
        //console.log("handleCbClick - on checkbox change") 
        function invertCbTagArray(index){
            let newset=[...tags];
            newset[index].isChecked=!newset[index].isChecked;
            setTags(newset);
            //console.log("just changed tagset to:",newset)
        }
        
        const index=Number(e.target.id.substring(3,4));
        console.log(e.target);
        invertCbTagArray(index);       
        return index;
    }

// code that executes when a checkbox in the 'filter by type' dropdown list is changed    
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

    //update a single record in the array of (filtered) page objects after some element has been changed (eg. likes/dislikes)
    function updateOneInPageObjects(newObj){
        
        let currentPageObjects=[...pageObjects];
        const foundIndex=currentPageObjects.findIndex((objct)=>{
            return objct._id===newObj._id
        })
        if(foundIndex>0){
            currentPageObjects[foundIndex]= newObj;
            setPageObjects(currentPageObjects); 
            console.log(currentPageObjects);   
        }
    };

    //update a single record in the array of all page objects after some element has been changed (eg. likes/dislikes)
    function updateOneInAllPageObjects(newObj){
        
        let currentAllPageObjects=[...allPageObjects];
        const foundIndex=currentAllPageObjects.findIndex((objct)=>{
            return objct._id===newObj._id
        })
        if(foundIndex>0){
            currentAllPageObjects[foundIndex]= newObj;
            setAllPageObjects(currentAllPageObjects); 
            //console.log(currentAllPageObjects);
        }
    };

    //code that executes when the user presses the thumbs up button
    function onThumbsUpClick (e) {
        //e.preventDefault();
        console.log(e.target);
        const record_id=e.target.id.slice(3);
        const current_val=e.target.value;
        API.increaseLikes(record_id,current_val)
            .then((res)=>{
                console.log("response",res.data)
                updateOneInPageObjects(res.data);
                updateOneInAllPageObjects(res.data);
                
            });
    };
    //code that executes when the user presses the thumbs down button
    function onThumbsDownClick (e) {
        e.preventDefault();
        //extract the id of the record from the id of the object
        const record_id=e.target.id.slice(3);
        const current_val=e.target.value;
        API.increaseDislikes(record_id,current_val)
            .then((res)=>{
                updateOneInPageObjects(res.data);
                updateOneInAllPageObjects(res.data);
            })
    };
    
    //code that executes when the check all button is clicked in the 'filter by topic' dropdown box
    function handleCheckAll() {
        //console.log("handleCheckAll")
        const newtags = tags.map(onetag=>{
            return ({tagName: onetag.tagName, 
                    isChecked:true})
            });
        setTags(newtags);
        //console.log(tags);
    };
    //code that executes when the uncheck all button is clicked in the 'filter by topic' dropdown box
    function handleUncheckAll() {
        //console.log("handleUncheckAll")
        const newtags = tags.map(onetag=>{
            return ({tagName: onetag.tagName, 
                    isChecked:false})
            });
        setTags(newtags);
        //console.log(tags);
    };
    //code that executes when the check all button is clicked in the 'filter by type' dropdown box
    function handleTypeCheckAll() {
        //console.log("handleCheckAll")
        const newtags = types.map(onetag=>{
            return ({tagName: onetag.tagName, 
                    isChecked:true})
            });
        setTypes(newtags);
        console.log(tags);
    };
    //code that executes when the uncheck all button is clicked in the 'filter by type' dropdown box
    function handleTypeUncheckAll() {
        //console.log("handleUncheckAll")
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
                        <Col md={{ span: 2, offset: 0 }} className="taglist" > 
                            
                                <TagList 
                                    taglist={tags}
                                    handleChange={handleTagCbClick}
                                    checkAll={handleCheckAll}
                                    uncheckAll={handleUncheckAll}
                                    runTagFilter={runTagFilter}
                                    title={"Topic"}
                                    /> 
                            
                            
                                <TagList 
                                    taglist={types}
                                    handleChange={handleTypeCbClick}
                                    checkAll={handleTypeCheckAll}
                                    uncheckAll={handleTypeUncheckAll}
                                    runTagFilter={runTypeFilter}
                                    title={"Type"}
                                    />  
                            
                        </Col>}
                        <Col>
                            <Row>
                                {pageSuppliers!==undefined && <Col md={{ span: 6, offset: 0 }}><AdCarousel data={pageSuppliers}/></Col>}
                                {pageVideos!==undefined && <Col md={{ span: 6, offset: 0 }}><VideoCarousel data={pageVideos}/></Col> }
                            </Row>
                        
                            {pageObjects!== undefined && 
                            <Row>
                                <Col md={{ span: 12, offset: 0 }} > 
                                    
                                        <AllObjects 
                                            data={pageObjects}
                                            onThumbsUpClick={onThumbsUpClick}
                                            onThumbsDownClick={onThumbsDownClick}   
                                        /> 
                                    
                                </Col>
                            </Row> }
                        
                        </Col>
                    
                </Row>
                
            </Container>
            
            
            
        </>
    )
}