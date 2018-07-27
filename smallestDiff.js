function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a, b) => a - b)
	arrayTwo.sort((a, b) => a - b)
	let currentDiff = Infinity;
	let smallest = Infinity;
	let smallestPair = []
	let arr1Idx = 0;
	let arr2Idx = 0;
	while (arr1Idx < arrayOne.length && arr2Idx < arrayTwo.length) {
    console.log('hereat allll')
		const first = arrayOne[arr1Idx]
		const second = arrayTwo[arr2Idx]
		if (first > second) {
      console.log('getting here?!!!!!!!!!')
			currentDiff = first - second
			arr2Idx++
		} else if (first < second) {
      console.log('gettiningn;alsjd;flkadslkfajsdl;kj')
			currentDiff = second - first
			arr1Idx++
		} else {
			return [first, second]
		}

		if (currentDiff < smallest) {

      console.log('getting hererer? ')
			smallest = currentDiff
			smallestPair = [first, second]
		}
	}
	return smallestPair
}


// inputs [1, 3, 7],  [2, 5]  return [1, 2]


console.log(smallestDifference([1, 3, 7], [2, 5]))
