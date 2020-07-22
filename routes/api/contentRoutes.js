const ctr= require("../controllers/contentController")

module.exports = function(app) {

  // Get all data for a particular topic that isn't marked as hidden
    app.get("/api/:type", ctr.findAllTopicData);
     
    //show hidden content
    app.get("/api/unhide", ctr.showHiddenData);   

    //update likes
    app.put("/api/likes/:id",ctr.increaseLikes);

    //update dislikes
    app.put("/api/dislikes/:id",ctr.increaseDislikes);
    
    // delete content - but don't really delete it for now.  Just hide it by setting include=false
    app.put("/api/delete/:id",ctr.hideItem);
 
};
