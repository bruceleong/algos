{/* Building block techniques to solve all problems*/}

//reverse an array in place
//O(n) time / space
function arraySwap(array) {
  let beginningIndex = 0,
      endingIndex = array.length - 1
  while (beginningIndex < endingIndex) {
    [array[beginningIndex], array[endingIndex]] = [array[endingIndex], array[beginningIndex]]
    beginningIndex++
    endingIndex--
  }
  return array
}

arraySwap([1, 2, 3, 4, 5, 6])
