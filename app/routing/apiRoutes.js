// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Routes
// =============================================================

var friends = require("../data/friends");

  module.exports = function(app) {

// Displays all friends
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  
  // Displays a single friend, or returns false
  app.get("/api/friends/:friends", function(req, res) {
    var chosen = req.params.friends;
    console.log(chosen);
  
    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
    return res.json(false);
  });
  

  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;
    // We then add the json the user sent to the character array
    friends.push(newFriend);
  
    // We then display the JSON to the users
    res.json(true);
  });
}


