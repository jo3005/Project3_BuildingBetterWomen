const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

require("../utils/API.js")(app);


//setup mongoose connection


// routes


// passport


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
