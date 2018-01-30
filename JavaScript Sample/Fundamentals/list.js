var todos = ["a","b"]

var input = prompt("What would you like to do?");


while(input  !== "quit"){
if(input === "list"){
	listToDOs();
	
} else if(input === "new"){
	addToDO();
} else if (input ==="delete"){
	deleteTODO();
}
input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP!");

function listToDOs(){
console.log("**********")
	todos.forEach(function(todo, i){
		console.log(i+": "+todo);
	});	
}

function addToDO(){
	var newTodo = prompt("Enter new todo.");
	todos.push(newTodo);
	console.log("TODO ADDED");
}

function deleteTODO(){
	var index = prompt("Enter index of item to delete");	
	todos.splice(index, 1);
	console.log("DELETED TODO");
}