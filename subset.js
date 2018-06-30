// function subset(arr, k) {
// //1, 2, 3, 4
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//     console.log(arr[i])

//     console.log(sum, 'summmm')

//   }
//   console.log(new Set([0]))

//   return sum;
// }

// console.log(subset([1, 2, 3, 4], 8), 'true')

function subsetSum(target, arr) {
  let sums = [0];
  console.log(sums)
  for (let i = 0; i < arr.length; i++) {
    console.log(sums, 'sums')
    let sumsCopy = [...sums]; // create a new array to iterate through; iterating through the array that we're mutating will lead to some weird behavior
    console.log(sumsCopy, 'sums copy')
    for (let j = 0; j < sumsCopy.length; j++) {
      let newSum = sumsCopy[j] + arr[i];
      console.log(newSum, 'new sum')
      if (newSum === target) return true;
      else if (newSum < target) sums.push(newSum);
    }
  }
  console.log(sums)
  return false;
}

console.log(subsetSum(30, [1, 19, 3]), 'false')

