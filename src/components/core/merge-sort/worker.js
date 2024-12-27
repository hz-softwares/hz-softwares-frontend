onmessage = function (e) {
	const length = e.data;
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
	const list = new Set();
	for (let index = 0; index < length; index++) {
		list.add(getRandomInt(length));
	}
	console.log("set list");
	self.postMessage(Array.from(list));
};
