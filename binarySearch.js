/*

binary search

TIme = O(nLogn)
Space = 0(1)

write a function
*/

let array = [0, 1, 21, 33, 45, 59, 61, 71, 72]
let targetSum = 33

//answer = 3

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let midpoint = Math.floor((left + right) / 2)
    console.log(array[midpoint])
    if (target === array[midpoint]) {
      return midpoint
    } else if (target > array[midpoint]) {
      left = midpoint
    } else if (target < array[midpoint]) {
      right = midpoint
    }
  }
  return -1
}

console.log(binarySearch(array, targetSum))
