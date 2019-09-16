const express = require("express");

const path = require("path");

const app = express();

// Run the app by serving the static files dsafda asas  adsadsadadsa dsads dsds
// Run the app by serving the static files dsafda asas  adsadsadadsa dsads 
// in the dist directory
app.use(express.static(__dirname + "/dist/assignment-frontend"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/assignment-frontend/index.html"));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 5000);
