onmessage = function (e) {
	const result = mergeSort(e.data);
	self.postMessage(result);
};

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

function mergeSort(list) {
	if (list.length < 2) {
		return list;
	}
	const [left, right] = divide(list);
	const leftSorted = mergeSort(left);
	const rightSorted = mergeSort(right);
	return join(leftSorted, rightSorted);
}