// JavaScript Document
var movies = [
	{
	title: "Transformers",
	rating: 4,
	isWatched: true
	},
	{
	title: "Moana",
	rating: 3,
	isWatched: false
	},
	{
	title: "Hitman",
	rating: 2,
	isWatched: true	
		
	}
]

movies.forEach(
function(movie){
result ="You have";
if(movie.isWatched){
result += " seen ";	
}else {
result += " not seen ";	
}
result += movie.title +". ";
result += "It has a rating of: "+movie.rating;
console.log(result);
}
)

user = {
	name: "Rittick",
	age: 27,
	comments: ["Nice!","WOw!","Oh! No!"]
}

user.comments.forEach(function(comment){
console.log(comment);	
}
)