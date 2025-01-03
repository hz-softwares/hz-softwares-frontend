const worker1 = new Worker(new URL("subSorter.js", import.meta.url));
const worker2 = new Worker(new URL("subSorter.js", import.meta.url));
onmessage = async function (e) {
	const result = await mergeSort(e.data);
	self.postMessage(result.toReversed());
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
function divide(list) {
	const half = list.length / 2;
	return [list.slice(0, half), list.slice(half)];
}

function join(left, right) {
	let leftIndex = 0;
	let rightIndex = 0;
	const resultList = [];
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] <= right[rightIndex]) {
			resultList.push(left[leftIndex]);
			leftIndex = leftIndex + 1;
		} else if (rightIndex < right.length) {
			resultList.push(right[rightIndex]);
			rightIndex = rightIndex + 1;
		}
	}
	if (leftIndex < left.length) {
		resultList.push(...left.slice(leftIndex));
	} else if (rightIndex < right.length) {
		resultList.push(...right.slice(rightIndex));
	}
	return resultList;
}

async function mergeSort(list) {
	if (list.length < 2) {
		return list;
	}
	const [left, right] = divide(list);
	const leftSortedPromise = postMessageAsync(worker1, left);
	const rightSortedPromise = postMessageAsync(worker2, right);
	const [leftSorted, rightSorted] = await Promise.all([leftSortedPromise, rightSortedPromise]);
	return join(leftSorted, rightSorted);
}
