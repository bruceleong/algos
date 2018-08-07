function kadanesAlgo(arr) {
  //initialize the first element as our check
  let maxEndingHere = arr[0]
  let maxSoFar = arr[0]
  for (let i = 1; i < arr.length; i++) {
    const currentElementToTest = arr[i]
    //check greatest of - 2 elements = previous + current or current
    maxEndingHere = Math.max(currentElementToTest, maxEndingHere + currentElementToTest)
    //check Max of (previous + next  previous) or previous
    maxSoFar = Math.max(maxSoFar, maxEndingHere)
  }
  return maxSoFar
}

console.log(kadanesAlgo([1, 2, 3, -1]), '-->', 6)
console.log(kadanesAlgo([1, -2, 3]), '-->', 2)
