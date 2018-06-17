(function(){
	"use strict";

	var btn = document.getElementById("btn");

	btn.addEventListener("click", function(){
		var fortune= ["大吉","中吉","小吉","吉","凶"];
		var x = Math.floor(Math.random()* fortune.length);
		this.textContent = fortune[x];
		//if文、switch文でも可
	});
	btn.addEventListener("mousedown", function(){
		this.className = "pushed";
	});
	btn.addEventListener("mouseup", function(){
		this.className = "";
	});

})();