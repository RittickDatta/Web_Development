var express =  require ("express");

var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment");
});

app.get("/speak/pig", function(req, res){
    res.send("The pig says 'Oink'");
});

app.get("/speak/cow", function(req, res){
    res.send("The cow says 'Moo'");
});

app.get("/speak/dog", function(req, res){
    res.send("The dog says 'Woof'");
});

app.get("/repeat/:word/:num", function(req, res) {
    var num = req.params.num;
    var word = req.params.word;
    for(var i=0; i<num; i++){
        console.log(word);
    }
    res.send("Printing to console...");
})

app.get("*", function(req, res){
    res.send("Sorry, page not found!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started...");
})