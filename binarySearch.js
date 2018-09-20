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

// console.log(binarySearch(array, targetSum))

function binarySearchDups(arr, target) {
  let left = 0
  let right = arr.length - 1
  console.log(left, right)
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    console.log(mid, '-- current mid --')
    if (arr[mid] > target || (arr[mid] === target && mid > 0 && arr[mid - 1] === target)) {
      right = mid - 1
    }
    else if (arr[mid] < target) {
      left = mid + 1
    }
    else {
      return mid
    }
  }
  return -1
}

// console.log(binarySearchDups([1, 2, 2, 3, 4, 5], 2), '- index 1 -')
// console.log(binarySearchDups([1, 2, 2, 3, 4, 5, 5], 5), '- index 5 -')

function binarySearchClosest(arr, target) {
  let closestVal = -1
  let left = 0, right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (Math.abs(closestVal - target) > Math.abs(arr[mid] - target)) {
      closestVal = arr[mid]
    }
    if (arr[mid] > target) {
      right = mid - 1
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      console.log('found it', mid)
      return true
    }
  }
  return closestVal
}

console.log(binarySearchClosest([2, 3, 5, 7.5, 9, 11], 8))
