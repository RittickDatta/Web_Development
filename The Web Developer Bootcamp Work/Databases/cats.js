var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//add cat
// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat) {
//     if (err) {
//         console.log("Something went wrong");
//     }
//     else {
//         console.log("We just saved a cat to the database");
//         console.log(cat);
//     }
// });


Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(cat);
    }
});

//retrieve all cat; console.log each one
Cat.find({}, function(err, cats) {
    if (err) {
        console.log("Oh! No!");
        console.log(err);
    }
    else {
        console.log("All Cats");
        console.log(cats);
    }
});
