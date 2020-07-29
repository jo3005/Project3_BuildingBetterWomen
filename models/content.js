const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  topic: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  headingText: {
    type: String,
    required: true
  },
  headingGraphic: {
    type: Buffer,
    required: false
  },
  logoUrl:{
    type:String,
    required:false
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
    type: String,
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
  tags:{
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

const Content = mongoose.model("Content", contentSchema);

module.exports = Content;
