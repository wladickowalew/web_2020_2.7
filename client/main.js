let Vue = require("vue");
let App = require("./app.vue");

let vm = Vue({
	el: "#root",
	render: function (createElement) {
		return createElement(App);
	}
})