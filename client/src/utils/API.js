import axios from 'axios';

export default  {
    getAllTopicData: function(topic){
        //console.log("getting data for topic:", topic);
        return axios.get('/api',{
            params:{
                type:topic
            }})
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
    }
};
