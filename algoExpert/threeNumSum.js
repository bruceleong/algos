function threeNumSum(array, target) {
  array.sort((a, b) => a - b)
  const triplets = []
  for (let i = 0; i < array.length; i++) {
    let left = i + 1, right = array.length - 1
    while (left < right) {
      const currentVal = array[i] + array[left] + array[right]
      if (currentVal > target) {
        right--
      } else if (currentVal < target) {
        left++
      } else {
        triplets.push([array[i], array[left], array[right]])
        right--
        left++
      }
    }
  }
  return triplets
}

console.log(threeNumSum([12, 3, 1, 2, -6, 5, -8, 6], 0), '[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]')

console.log(threeNumSum([1, 2, 3, 4, 5, 0], 6), '[[1, 2, 3], [0, 1, 5]]')
