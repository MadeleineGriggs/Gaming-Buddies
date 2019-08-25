
var path = require('path');

var friendsData = require("../data/friends.js");

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {

    var userInput = req.body;

    userAnswers = userInput.scores;

    // var matchName = "";
    // var matchImg = "";
    // var friendDifference = 500;

    // // Iterate through all existing users.
    // for (var i = 0; i < friendsData.length; i ++) {
    //   //compare difference for each question
    //   var questionDiff = 0;
    //   for (var a = 0; a < userAnswers.length; a ++) {
    //     questionDiff += Math.abs(friendsData[i].scores[a] - userAnswers[a]);

    //   }

    //   // If the difference is lower than current, record the friend as a match.
    //   if (questionDiff < friendDifference) {
    //     friendDifference = questionDiff;
    //     matchName = friendsData[i].name;
    //     matchImg = friendsData[i].photo;
    //   }
    // }

    //Adds a new friend to the friends array.
    friendsData.push(userInput);

    //Send a response with info.
    res.json({status: 'OK'});
    // res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
  });

};
