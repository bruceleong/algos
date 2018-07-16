function subArraySort(array) {
/*
twoPointers
find earliest number whose value is less than its previous value
find latest number whose value is greater than it succeding value

find largest and smallest number in between my twoPointers

find proper index of that smallest
find proper index of that largest

return those indices
Time - O(n)
Space - O(1)
*/
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;
  for (let i = 0; i < array.length; i++) {
    const num = array[i]
    if (isNotSorted(i, num, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, num)
      maxOutOfOrder = Math.max(maxOutOfOrder, num)
      console.log(minOutOfOrder, 'min', maxOutOfOrder, 'max')
    }
  }
  if (minOutOfOrder === Infinity) {
    return [-1, -1]
  }
  let subArrayLeftIdx = 0
  while (array[subArrayLeftIdx] <= minOutOfOrder) {
    subArrayLeftIdx++
  }
  let subArrayRightIdx = array.length - 1
  while (array[subArrayRightIdx] >= maxOutOfOrder) {
    subArrayRightIdx--
  }

  return [subArrayLeftIdx, subArrayRightIdx]
}

function isNotSorted(i, num, array) {
  if (i === 0) return num > array[i + 1]
  if (i === array.length - 1) return num < array[i - 1]
  return num > array[i + 1] || num < array[i - 1]
}


// let arr = [1, 3, 2, 4]
let arr = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]

console.log(subArraySort(arr))
