function root(x, n) {
  if (x === 0) return 0;

  let min = 0
  let max = Math.max(1, x)
  let candidateRoot = (max + min) / 2

  while (candidateRoot - min >= 0.001) {
    if (Math.pow(candidateRoot, n) > x) {
      max = candidateRoot
    } else if (Math.pow(candidateRoot, n) < x) {
      min = candidateRoot
    }
    candidateRoot = (max + min) / 2
  }
  return candidateRoot
}

console.log(root(7, 3), '1.913')
