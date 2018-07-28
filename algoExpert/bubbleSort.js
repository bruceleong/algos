// 0(n^2) time || 0(1) space

function bubbleSort(array) {
	let isSorted = false;
	let counter = 0;
	while (!isSorted) {
		isSorted = true
		for (let i = 0; i < array.length - 1 - counter; i++) {
			if (array[i] > array[i + 1]) {
				isSorted = false
				swap(i, i + 1, array)
			}
		}
		counter++
	}
	return array
}

function swap(current, next, array) {
	let toChange = array[next]
	array[next] = array[current]
	array[current] = toChange
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]))
