function smallestDifference(arr1, arr2) {
  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)
  let current = Infinity
  let smallest = Infinity
  let smallestPair = []
  let arr1Idx = 0
  let arr2Idx = 0;
  while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
    let firstNum = arr1[arr1Idx]
    let secondNum = arr2[arr2Idx]
    current = firstNum - secondNum
    //1 and 2 = -1
    //3 and 2 = 1
    //3 and 5 = -2
    //7 and 5 = 2

    if (current > 0 ) {
      arr2Idx++
    } else if (current < 0) {
      arr1Idx++
    } else {
      return [firstNum, secondNum]
    }

    if (Math.abs(current) < smallest) {
      smallest = Math.abs(current)
      smallestPair = [firstNum, secondNum]
    }

  }
  return smallestPair;
}


// inputs [1, 3, 7],  [2, 5]  return [1, 2]


console.log(smallestDifference([1, 3, 7], [2, 5]))