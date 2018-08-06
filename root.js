//find the n to the power of y = x
//time O(log(n)) n = product
//space 0(1)

function root(product, power) {
  if (product === 0) return product
  //the root can be between 0 - power

  //initialize min of 0
  let min = 0
  //initialize max of n
  let max = Math.max(1, product)
  //find the midpoint - binary search algo
  let mid = (min + max) / 2
  while (mid - min >= .001) {
    if (Math.pow(mid, power) > product) {
      max = mid
    } else if (Math.pow(mid, power) < product) {
      min = mid
    } else {
      break;
    }
    mid = (min + max) / 2
  }
  return mid
}

console.log(root(7, 3), '1.913')
console.log(root(8, 3), '2')
console.log(root(81, 4), '3')
console.log(root(81, 80.9), '1.05651')
