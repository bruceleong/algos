function maxSumNoAdj(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0]
  let second = array[0];
  let first = Math.max(array[0], array[1])
  for (let i = 2; i < array.length; i++) {
    const current = Math.max(first, second + array[i])
    second = first
    first = current
  }
  return first
}

// console.log(maxSumNoAdj([75, 1050, 120, 80, 90, 135]))
console.log(maxSumNoAdj([10, 11, 3, 4]))
