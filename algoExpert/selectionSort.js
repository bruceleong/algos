function selectionSort(array) {
  let startIdx = 0
  //op until the start === length
  while (startIdx < array.length - 1) {
    let smallestIdx = startIdx
    //start at the 1 index
    for (let i = startIdx + 1; i < array.length; i++) {
      //if current is bigger than the smallest idx => reasign
      if (array[smallestIdx] > array[i]) smallestIdx = i
    }
    swap(startIdx, smallestIdx, array)
    startIdx++
  }
  return array
}

function swap(i, j, array) {
  const temp = array[j]
  array[j] = array[i]
  array[i] = temp
}

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3], '2, 3, 5, 5, 6, 8, 9'))

console.log(selectionSort([3, 2, 1], '1, 2, 3'))
