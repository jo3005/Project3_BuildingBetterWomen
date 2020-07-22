import axios from 'axios';

export default  {
    getAllTopicData: function(topic){
        return axios.get('/api',{params:{type:topic}})
    },
    getHiddenData: function(){
        return axios.get('/api/hidden')
    },
    increaseLikes: function(whichId,currentLikes){
        return axios.put('/api/likes',{params:{id:whichId,likes:currentLikes}})
    },
    increaseDislikes: function(whichId,currentDislikes){
        return axios.put('/api/dislikes',{params:{id:whichId,dislikes:currentDislikes}})
    },
    deleteItem: function(whichId){
        return axios.put('/api/likes',{params:{id:whichId}})
    }
};
