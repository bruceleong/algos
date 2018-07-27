function minNumOfCoins(target, arr) {
  let changeArr = new Array(target + 1).fill(Infinity)
  changeArr[0] = 0
  for (const num of arr) {
    for (let amount = 0; amount < changeArr.length; amount++) {
      if (num <= amount) {
        changeArr[amount] = Math.min(changeArr[amount], changeArr[amount - num] + 1)
      }
    }
  }
  return changeArr[target] !== Infinity ? changeArr[target] : -1
}

console.log(minNumOfCoins(17, [1, 5, 10]))
