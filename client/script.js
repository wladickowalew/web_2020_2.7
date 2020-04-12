let $ = require("jquery");
let m = require("./module.js");

console.log(m.f(5));
$("button").on("click", function () {
	alert("Hello, Watchify!");
})