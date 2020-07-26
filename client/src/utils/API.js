import axios from 'axios';

export default  {
    getAllTopicData: function(topic){
        console.log("getting data for topic:", topic);
        return axios.get('/api',{
            params:{
                type:topic
            }})
    },
    getHiddenData: async function(){
        return axios.get('/api/hidden')
    },
    increaseLikes:async  function(whichId,currentLikes){
        return axios.put('/api/likes',{params:{id:whichId,likes:currentLikes}})
    },
    increaseDislikes:async  function(whichId,currentDislikes){
        return axios.put('/api/dislikes',{params:{id:whichId,dislikes:currentDislikes}})
    },
    deleteItem:async  function(whichId){
        return axios.put('/api/likes',{params:{id:whichId}})
    }
};
