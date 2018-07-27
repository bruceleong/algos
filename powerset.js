function powerset(array, idx = null) {
	let triplets = [[]]
	for (let num of array) {
		const length = triplets.length
		// console.log(length, ' current ')
		for (let i = 0; i < length; i++) {
			triplets.push(triplets[i].concat(num))
		}
	}
	return triplets
	// if (idx === null) {
	// 	idx = array.length - 1
	// }
	// if (idx < 0) {
	// 	return [[]]
	// }

	// let ele = array[idx]
	// let subset = powerset(array, idx - 1)
	// let length = subset.length

	// 	for (let i = 0; i < length; i++) {
	// 		subset.push(subset[i].concat(ele))
	// 	}
	// return subset
}

console.log(powerset(['b', 'a', 'd']))
