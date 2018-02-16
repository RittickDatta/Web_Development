var express = require("express");
var app = express();



// "/" => "Hi There"
app.get("/", function(req, res){
    res.send("Hi There!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
   res.send("Goodbye!") ;
});
// "/dog" => "Bow!"
app.get("/dog", function(req, res) {
    console.log("Someone made a request");
   res.send("Bow!") ;
});

app.get("/r/:subredditName", function(req, res){
   var subreddit = req.params.subredditName;
   res.send("Welcome to a "+ subreddit +" sub reddit"); 
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
     console.log(req.params);
    res.send("Welcome to comments");
});

app.get("*", function(req, res){
   res.send("You are a STAR!") ;
});

//Tell Express to Listen
app.listen(process.env.PORT, process.env.IP,  function(){
    console.log("Server has started!");
});