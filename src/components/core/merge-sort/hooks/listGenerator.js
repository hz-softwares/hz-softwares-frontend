onmessage = async function (e) {
	const { start, end } = e.data;
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
	const list = new Set();
	const end1 = Math.floor((end - start) / 2);
	let resultPromise = null;
	if (start - end > 10_000_000) {
		const worker = new Worker(new URL("listGenerator.js", import.meta.url));
		resultPromise = postMessageAsync(worker, { start: end1, end: end });
	}
	for (let index = start; index < end1; index++) {
		list.add(getRandomInt(end1));
	}
	let result = [];
	if (resultPromise) {
		result = await resultPromise;
	}
	self.postMessage(Array.from(list).concat(...result));
};

function postMessageAsync(worker, list) {
	worker.postMessage(list);
	return new Promise((resolve, reject) => {
		worker.onmessage = (e) => {
			resolve(e.data);
		};
		worker.onmessgeerror = (e) => {
			reject(e);
		};
	});
}
