var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var p1Score = 0;
var p2Score = 0;

p1button.addEventListener("click", function(){
	p1Score++;
	p1Display.textContent = p1Score;
	});
	
p2button.addEventListener("click", function(){
	p2Score++;
	p2Display.textContent = p2Score;	
	});