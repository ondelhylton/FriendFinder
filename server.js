// Your server.js file should require the basic npm packages we've used in class: express and path.

var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;


// app.use(express.static("public"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Import routes and give the server access to them.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
