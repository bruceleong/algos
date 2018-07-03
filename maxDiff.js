function maxDiff(arr) {
  let minSoFar = Infinity;
  let maxDif = 0;

  for (let i = 0; i < arr.length; i++) {
    minSoFar = Math.min(arr[i], minSoFar)
    // console.log(minSoFar, 'min so far')
    // console.log(arr[i], 'loop')
    maxDif = Math.max(arr[i] - minSoFar, maxDif)
  }
  return maxDif
}

let array = [2, 3, 1, 4, 5, 7, 5, 4]

console.log(maxDiff(array), '6')
