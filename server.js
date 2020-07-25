const express = require("express");
const path = require("path");
const compression = require("compression");

const mongoose = require("mongoose");
const logger = require('morgan');


// Requiring passport as we've configured it
// =============================================================
//const passport = require("./config/passport");

// Include environmental variables
// =============================================================
require("dotenv").config();


// Sets up the Express App
// =============================================================
const PORT = process.env.PORT || 8080;
const app = express();

// Serve up static assets (usually on heroku)
// =============================================================
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Routes
// =============================================================
require("./routes/api/contentRoutes")(app);


// import utility functions
// =============================================================
//require("../utils/API.js")(app);


// Send every request to the React app
// Define any API routes before this runs
// =============================================================
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.use(logger("dev"));


// Sets up the Express app to handle data parsing
// =============================================================
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* 

// We need to use sessions to keep track of our user's login status
// =============================================================
app.use(
  session({ secret: "razor sharp", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session()); */




// Connect to the Mongo DB
// =============================================================
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bbwcontent");


// Requiring our models for syncing
// =============================================================
const db = require("./models");

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
