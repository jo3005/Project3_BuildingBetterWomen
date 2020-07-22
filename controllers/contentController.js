const db = require("../models");

// Defining methods for the contentController

module.exports = {
  findAllTopicData: function(req, res) {
    const whichTopic = function() {
      switch(req.params.type) {
        case "money":
          return "financial";
          break;
        case "handywoman":
          return "practical";
          break;
        case "legal":
          return "legal";
          break;
        case "mentalhealth":
          return "mentalhealth";
          break;
        case "jobs":
          return "jobs";
          break;
        default:
          return "*"; 
      }
    }
    db.Content.find({topic:whichTopic,include:true})
    .then(function(topics) {
      res.json(topics);
    })
    .catch(err => res.status(422).json(err))
    },

  showHiddenData: function(req, res) {
    db.Content.find({include:false})
    .then(function(topics) {
      res.json(topics);
    })
    .catch(err => res.status(422).json(err))
    },

  increaseLikes:function(req,res){
    db.Content.findByIdAndUpdate(req.params._id,{likes=req.body.likes+1})
    .then(function(topic){
      res.json(topic)
     })
    .catch(err => res.status(422).json(err))
  },

  increaseDislikes: function(req,res){
    db.Content.findByIdAndUpdate(req.params._id,{dislikes=req.body.dislikes+1})
    .then(function(topic){
      res.json(topic)
     })
    .catch(err => res.status(422).json(err))
  },

  hideItem: function(req,res){
    db.Content.findByIdAndUpdate(req.params.id,{include=false})
    .then(function(topic){
      res.json(topic)
     })
    .catch(err => res.status(422).json(err))
  }
};

