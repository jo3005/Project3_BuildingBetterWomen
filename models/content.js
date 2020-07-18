const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  headingText: {
    type: String,
    required: true
  },
  headingGraphic: {
    type: Image,
    required: false
  },
  author:{
    type:String,
    required: false
  },
  subtitle: {
    type: String,
    required: false
  },
  contentText:{
    type: Buffer,
    required:false
  },
  url:{
    type: String,
    required:false
  },
  links:{
    type:[String],
    required:false
  },
  graphics:{
    type:[Buffer],
    required:false  
  },
  include:{
      type:Boolean,
      required:true,
      default:true
  },
  attributes:{
    type:[String],
    required: false
  },
  likes:{
    type:Number,
    required:true,
    default: 0
  },
  dislikes:{
    type:Number,
    required:true,
    default: 0
  },
  insertedAt:{
    type:Date,
    required:true,
    default: Date.now
  }

});

const Recipe = mongoose.model("BBWContent", contentSchema);

module.exports = BBWContent;
