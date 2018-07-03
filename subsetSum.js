// function subsetSum(target, array) {
//   let sets = [[]];
//   for (let num of array) {
//     let length = sets.length;
//     for (let i = 0; i < length; i++) {
//       let candidate = Number(sets[i] + num)
//       if (candidate === target) {
//         sets.push(candidate)
//       } else {
//         console.log(sets)
//         sets.push(candidate)
//       }
//     }

//   }
//   return sets.includes(target)
// }

function subsetSum(target, arr) {
  let sums = [0];
  for (let i = 0; i < arr.length; i++) {
    let sumsCopy = [...sums]
    for (let j = 0; j < sumsCopy.length; j++) {
      console.log(sums, 'current checking')
      let newSum = sumsCopy[j] + arr[i]
      if (newSum === target) return true
      else if (newSum < target) sums.push(newSum)
    }
  }
  return false
}

console.log(subsetSum(2, [1, 10, 5, 1])); // false
// console.log(subsetSum(10, [1, 10, 5, 3])); // true
// console.log(subsetSum(9, [1, 10, 5, 3])); // true
// console.log(subsetSum(19, [1, 10, 5, 3])); // true
// console.log(subsetSum(17, [1, 10, 5, 3])); // false
