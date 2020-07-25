const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

const Contents = [{
  topic:"money",
type: "blog",
headingText: "Heading 1"}];

db.Content
  .remove({})
  .then(() => db.Content.collection.insertMany(Contents))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
