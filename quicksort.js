function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSortHelper(array, startIdx, endIdx) {
  if (startIdx >= endIdx) return;
  //initialize pointers
  const pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;
  //check all numbers - when right < left, you're done
  while (rightIdx >= leftIdx) {
    //if left is great than pivotIdx and right less than pivotIdx
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      //then swap
      swap(leftIdx, rightIdx, array)
    }
    //if they are in their sorted position s1- left => increment / right => decrement
    if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
    if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
  }
  swap(pivotIdx, rightIdx, array)
  const leftSubArrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1)
  if (leftSubArrayIsSmaller) {
    quickSortHelper(array, startIdx, rightIdx - 1)
    quickSortHelper(array, rightIdx + 1, endIdx)
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx)
    quickSortHelper(array, startIdx, rightIdx - 1)
  }
}

function swap(i, j, array) {
  let temp = array[j]
  array[j] = array[i]
  array[i] = temp
}



// console.log(quickSort([8, 5, 2, 9, 5, 6, 3]), '[2, 3, 5, 5, 6, 8, 9]')
console.log(quickSort([2, 3, 1, 4]), '[1, 2, 3, 4]')
