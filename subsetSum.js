function subsetSum(target, arr) {
  let sums = [0];
  for (let i = 0; i < arr.length; i++) {
    let sumsCopy = sums.length
    for (let j = 0; j < sumsCopy; j++) {
      let newSum = sums[j] + arr[i]
      if (newSum === target) {
        return true
      } else if (newSum < target) {
        sums.push(newSum)
      }
    }
  }
  return false
}

console.log(subsetSum(3, [1, 10, 5, 1])); // false
console.log(subsetSum(10, [1, 10, 5, 3])); // true
console.log(subsetSum(9, [1, 10, 5, 3])); // true
console.log(subsetSum(19, [1, 10, 5, 3])); // true
console.log(subsetSum(17, [1, 10, 5, 3])); // false
