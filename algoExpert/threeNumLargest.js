function threeNumSum(array) {
  const threeLargest = [null, null, null]
  for (const num of array) {
    updateLargest(threeLargest, num)
  }
  return threeLargest
}

function updateLargest(array, num) {
  if (array[2] === null || num > array[2]) {
    shift(array, num, 2)
  } else if (array[1] === null || num > array[1]) {
    shift(array, num, 1)
  } else if (array[0] === null || num > array[0]) {
    shift(array, num, 0)
  }
}

function shift(array, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num
    } else {
      array[i] = array[i + 1]
    }
  }
}

console.log(threeNumSum([10, 5, 9, 10, 12]))
console.log(threeNumSum([141, 1, 17, -7, -17, -27, 18, 541, 8, 7,7]))
