const db = require("../models");

// Defining methods for the contentController

module.exports = {
  findAllTopicData: function(req, res) {
    //console.log("Showing the type:",req.query.type);
    db.Content.find({topic:(req.query.topic),include:true})
    .sort({topic:'asc', likes:'desc',dislikes:'asc'})
    .then(function(topics) {
      res.json(topics);
    })
    .catch(err => res.status(422).json(err))
    },

  findAllSupplierTopicData: function(req, res) {
    //console.log("Showing the type:",req.query.type);
    db.Content.find({topic:(req.query.topic),include:true})
    .sort({topic:'asc', likes:'desc',dislikes:'asc'})
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
    db.Content.findByIdAndUpdate(req.params.id,{likes:Number(req.body.likes)+1})
    .then(function(topic){
      res.json(topic)
     })
    .catch(err => res.status(422).json(err))
  },

  increaseDislikes: function(req,res){
    console.log(req);
    db.Content.findByIdAndUpdate(req.params.id,{dislikes:Number(req.body.dislikes)+1})
    .then(function(topic){
      res.json(topic)
     })
    .catch(err => res.status(422).json(err))
  },

  hideItem: function(req,res){
    db.Content.findByIdAndUpdate(req.params.id,{include:false})
    .then(function(topic){
      res.json(topic)
     })
    .catch(err => res.status(422).json(err))
  }
  
};

