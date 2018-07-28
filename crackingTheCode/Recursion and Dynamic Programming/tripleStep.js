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

console.log(tripleStep([1, 2, 3], 3), '3')

