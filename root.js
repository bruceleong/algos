function root(x, n) {
  if (x === 0) return x
  let min = 0;
  let max = x;
  let can = (min + max) / 2;
  while (can - min >= .001) {
    if (Math.pow(can, n) > x) {
      max = can
    } else if (Math.pow(can, n) < x) {
      min = can
    } else return can
    can = (min + max) / 2
  }
  return can
}

console.log(root(7, 3), '1.913')

