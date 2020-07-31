import axios from 'axios';
function whichTopic (input){
    let topic="";
    switch(input) {
      case "money":
        topic= "money";
        break;
      case "finances":
        topic= "money";
        break;
      case "handywoman":
        topic= "practical";
        break;
      case "practical":
        topic= "practical";
        break;
      case "legal":
        topic= "legal";
        break;
      case "mentalhealth":
        topic= "mentalhealth";
        break;
      case "jobs":
        topic= "jobs";
        break;
      default:
  }
  return topic;
  };
  
export default  {
    
    getAllTopicData: function(topic){
        console.log("getting data for topic:", topic);
        let mytopic=whichTopic(topic);
        console.log(mytopic);
        return axios.get('/api',{
            params:{
                topic:mytopic,
                type:['Approved Supplier','Web Store','Suggested Supplier']
                
            }
        })
    },
    getAllSupplierTopicData: function(topic){
      console.log("getting data for topic:", topic);
      let mytopic=whichTopic(topic);
      console.log(mytopic);
      return axios.get('/api/suppliers',{
          params:{
              type:mytopic,
              type:['Approved Supplier','Web Store','Suggested Supplier']

          }
      })
    },
    getOneTopicData: function(whichId){
        //console.log("getting data for topic:", whichId);
        return axios.get(`/api/${whichId}`);
    },
    getHiddenData: function(){
        return axios.get('/api/hidden')
    },
    increaseLikes: function(whichId,currentLikes){
        return axios.put(`/api/likes/${whichId}`,{likes:currentLikes})
    },
    increaseDislikes:function(whichId,currentDislikes){
        
        return axios.put(`/api/dislikes/${whichId}`,{dislikes:currentDislikes})
    },
    deleteItem:function(whichId){
        return axios.post('/api/likes',{params:{_id:whichId}})
    },
   
    sendMail:function(html_body){
        return axios.post('/send',{htmlbody:html_body})
    },
    
    checkGoogleCaptcha: function(key){
        return axios.post(`/submit`,{value:key})
    }
};
