const ctr= require("../../controllers/contentController");
const em= require("../../controllers/emailController");

module.exports = function(app) {

  // Get all data for a particular topic that isn't marked as hidden and is not a supplier
    app.get("/api", ctr.findAllTopicData);

    // Get all data for a particular topic that isn't marked as hidden
    app.get("/api/suppliers", ctr.findAllSupplierTopicData);
     
    //show hidden content
    app.get("/api/unhide", ctr.showHiddenData);   

    //update likes
    app.put("/api/likes/:id",ctr.increaseLikes);

    //update dislikes
    app.put("/api/dislikes/:id",ctr.increaseDislikes);
    
    // delete content - but don't really delete it for now.  Just hide it by setting include=false
    app.put("/api/delete/:id",ctr.hideItem);

    app.post("/submit",em.checkCaptcha);

    app.post("/send",em.sendGmail);
 
};
