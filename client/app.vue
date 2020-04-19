<template>
	<div>
		<p><input type="text" v-model="message"></p>
		<par-cap v-bind:p-text="message"></par-cap>
	</div>
</template>

<script>
	let ParCap = require("./par-cap.vue");
	module.exports = {
		data: function () {
			return {message: "Hello Component!"};
		},
		components: {parCap: ParCap}
	};
</script>