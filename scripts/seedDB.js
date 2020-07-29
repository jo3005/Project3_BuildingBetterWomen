const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bbwcontent",
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }); 

// This file empties the Books collection and inserts the books below

const Contents = [{
  topic:"money",
  type: "Approved Supplier",
  headingText: "Carbon Group",
  logoUrl:"https://carbongroup.com.au/assets/images/logo.svg",
  author:"",
  subtitle:"Accountants & Bookkeepers",
  contentText:"",
  url: "https://carbongroup.com.au/",
  links:[],
  graphics:"",
  tags:["accounting","tax","financial planning","insurance"],
  include:true

},
{topic:"money",
  type: "Approved Supplier",
  headingText: "Cornish Wealth Management",
  logoUrl:"https://perthfinancialplanning.com.au/wp-content/uploads/2018/12/Cornish.png",
  author:"",
  subtitle:"Financial Planning",
  contentText:"",
  url: "https://perthfinancialplanning.com.au/",
  links:[],
  graphics:"",
  tags:["financial planning","insurance","superannuation & retirement","investing"],
  include:true},

  {
  topic:"money",
  type: "Government Website",
  headingText: "Moneysmart.gov.au",
  logoUrl:"https://static.moneysmart.gov.au/nextgen/img/header-logo-color.svg",
  author:"Australian Government",
  subtitle:"Free Financial Advice",
  contentText:"We help Australians take control of their money and build a better life with free tools, tips and guidance.",
  url: "https://moneysmart.gov.au/budgeting/how-to-do-a-budget",
  links:[],
  graphics:"",
  tags:["financial advice","insurance","budgeting & saving","superannuation & retirement","investing","loans,credit & debt","banking"],
  include:true
  }
  
];

db.Content
  .remove({})
  .then(() => db.Content.collection.insertMany(Contents,{setDefaultsOnInsert:true}))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
