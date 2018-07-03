function coinChange(num, denoms) {

  //initialize an array to find the combinations for x -> num
  let changeArray = new Array(num + 1).fill(0)
  changeArray[0] = 1

  //loop through each denom
  for (const denom of denoms) {
    //loop through the array to hold change
    for (let amount = 1; amount < num + 1; amount++) {
      //if the amount is larger than the denom, break it down
      if (amount >= denom) {
        changeArray[amount] = changeArray[amount - denom]
      }
    }
  }

  return changeArray[num]
}

// console.log(coinChange(4, [1, 5, 10, 25]), '1')
// console.log(coinChange(6, [1, 5]), '2')

function minNumberOfCoinsForChange(n, denoms) {
	let coinChange = new Array(n + 1).fill(Infinity)
	coinChange[0] = 0
	for (const denom of denoms) {
		for (let amount = 0; amount < coinChange.length; amount++) {
			if (amount >= denom) {
				coinChange[amount] = Math.min(coinChange[amount], coinChange[amount - denom] + 1)
			}
		}
	}
	return coinChange[n] !== Infinity ? coinChange[n] : -1
}

console.log(minNumberOfCoinsForChange(7, [1, 5, 10]))
