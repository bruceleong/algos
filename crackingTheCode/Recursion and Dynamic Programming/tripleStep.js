// function tripleStep(n) {
//   if (n < 0) return 0
//   else if (n === 0) return 1
//   else return tripleStep(n - 1) + tripleStep(n - 2) + tripleStep(n - 3)
// }

function tripleStep(steps, n) {
  const numOfSteps = new Array(n + 1).fill(0)
  numOfSteps[0] = 1

  for (const step of steps) {
    for (let stairs = 1; stairs < n + 1; stairs++) {
      if (stairs >= step) {
        numOfSteps[stairs] += numOfSteps[stairs - step]
      }
    }
  }
  return numOfSteps[n]
}

// console.log(tripleStep([1, 2, 3], 3), '3')
console.log(tripleStep([1, 2, 3], 1), '1')

// console.log(tripleStep(1))
