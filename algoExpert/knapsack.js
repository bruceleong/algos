function knapsack(items, capacity) {

  const knapsackVals = []
  //construct 2d array - capacities (columns) and items(rows)
  for (let i = 0; i < items.length + 1; i++) {
    const row = (new Array(capacity + 1)).fill(0)
    knapsackVals.push(row)
  }
  for (let i = 1; i < items.length + 1; i++) {
    // console.log(items[i - 1], 'current items')
    const currentWeight = items[i - 1][1]
    const currentValue = items[i - 1][0]
    for (let c = 0; c < capacity + 1; c++) {
      if (currentWeight > c) {
        //if the item weight is too big, check the row above first - you started at 0
        knapsackVals[i][c] = knapsackVals[i - 1][c]
      } else {
        //if the item isn't too big, check the difference of weight and the row above with the remaining weight
        knapsackVals[i][c] = Math.max(knapsackVals[i - 1][c], knapsackVals[i - 1][c - currentWeight] + currentValue)
      }
    }
  }
  console.log(knapsackVals)
  return [knapsackVals[items.length][capacity], knapHelper(knapsackVals, items)]
}

function knapHelper(knapValues, items) {
	const sequence = []
  let i = knapValues.length - 1;
  console.log(i, 'current i')
  let c = knapValues[0].length - 1;
  console.log(c, 'current c')
	while ( i > 0) {
    //is the value the same as above? if so, we didn't add an item
		if (knapValues[i][c] === knapValues[i - 1][c]) {
			i -= 1
		} else {
      //append the indicies - decrement i and c
			sequence.unshift(i - 1)
			c -= items[i - 1][1]
			i -= 1
		}
		if (c === 0) break
	}
	return sequence
}

console.log(knapsack([[1, 2], [4, 3], [5, 6], [6, 7]], 10), '[10, [1,3]')
