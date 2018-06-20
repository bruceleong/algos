//kadanesAlgo

//1 implementation if maxSum must be +
function maxSub(array) {
  if (array === null) return 0
  let max = 0, maxSum = 0;

  for (let i = 0; i < array.length; i++) {
    max = Math.max(0, max + array[i])
    maxSum = Math.max(max, maxSum)
  }
  return maxSum
}

let arr = [-2, -3, 4, -1, -2, 1, 5, -1, 1]
console.log(maxSub(arr)) //7

function subArrayFinder(array, val) {
  if (array === null) return 0
  let max = 0, maxSum = 0;

  for (let i = 0; i < array.length; i++) {
    max = Math.max(0, max + array[i])
    maxSum = Math.max(max, maxSum)
    if (maxSum === val) return true

  }
  return false
}

// console.log(subArrayFinder(arr, 7))
