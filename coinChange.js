function coinChange(num, denoms) {
  let changeArray = new Array(num + 1).fill(0)
  changeArray[0] = 1

  for (const denom of denoms) {
    for (let amount = 1; amount < num + 1; amount++) {
      if (amount >= denom) {
        changeArray[amount] = changeArray[amount - denom]
      }
    }
  }

  return changeArray[num]
}

console.log(coinChange(4, [1, 5, 10, 25]), '1')
console.log(coinChange(6, [1, 5]), '2')
