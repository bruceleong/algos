function subsetSum(target, arr) {
  let sums = [0];
  for (let i = 0; i < arr.length; i++) {
    let sumsCopy = [...sums]; // create a new array to iterate through; iterating through the array that we're mutating will lead to some weird behavior
    for (let j = 0; j < sumsCopy.length; j++) {
      let newSum = sumsCopy[j] + arr[i];
      if (newSum === target) {
        return true;
      } else if (newSum < target) {
        sums.push(newSum)
      }
    }
  }
  console.log(sums)
  return false;
}

console.log(subsetSum(30, [1, 19, 3]), 'false')

