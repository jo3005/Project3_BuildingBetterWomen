var db = require("../models");


//Get all content for a category

module.exports = function(app) {
  app.get("/api/posts", function(req, res) {
    db.Post.find({}).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });


// delete content - but don't really delete it.  Just hide it by setting include=false
 

// update the likes

// update the dislikes



 
};
