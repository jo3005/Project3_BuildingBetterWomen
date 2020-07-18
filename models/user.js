const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  insertedAt:{
    type:Date,
    required:true,
    default: Date.now
  }

});

const User = mongoose.model("User", userSchema);

module.exports = User;
