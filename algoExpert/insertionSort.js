function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    //starting from index 1 check current vs previous and swap and go backwards till you're set.... then continue to iterate
    while (i > 0 && array[i] < array[i - 1]) {
      swap(i, i - 1, array)
      i -= 1
    }
  }
  return array
}

function swap(current, previous, array) {
  let temp = array[previous]
  array[previous] = array[current]
  array[current] = temp
}

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]), '2, 3, 5, 5, 6, 8, 9')
console.log(insertionSort([3, 1, 2]), '1, 2, 3')
