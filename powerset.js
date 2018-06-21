function powerset(array, idx = null) {
	let triplets = [[]]
	for (const num of array) {
		console.log(num, 'current num')
		let length = triplets.length
		console.log(length, 'currnt lenght of trip')
		for (let i = 0; i < length; i++) {
			triplets.push(triplets[i].concat(num))
			console.log('current trip', triplets)
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

console.log(powerset([1, 2, 3]))
