/*

binary search

TIme = O(Log(n))
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
    const midPoint = Math.floor((left + right) / 2)
    const potential = arr[midPoint]
    if (potential === target) {
      return midPoint
    } else if (potential > target) {
      right = midPoint - 1
    } else {
      left = midPoint + 1
    }
  }
  return -1
}

console.log(binarySearch(array, targetSum))
