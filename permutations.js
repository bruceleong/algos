function getPermutations(array) {
  const permutations = [];
  permutationsHelper(array, [], permutations)
  return permutations
}

function permutationsHelper(array, currentPermutation, permutations) {
  console.log('-------', array, '<-- array', currentPermutation, '<--currentPErm', permutations, '<--permutations', '=------')
  if (!array.length && currentPermutation.length) {
    console.log(currentPermutation, 'current perm')
    permutations.push(currentPermutation)
  } else {
    for (let i = 0; i < array.length; i++) {
      console.log(i, 'current i')
      console.log('current element', array[i])

      const newArray = array.slice(0, i).concat(array.slice(i + 1));

      console.log(newArray, 'new array')

      const newPermutation = currentPermutation.concat([array[i]])

      console.log(newPermutation, 'new perm')
      permutationsHelper(newArray, newPermutation, permutations)
    }
  }
}

console.log(getPermutations([1, 2]))
// console.log(getPermutations(['a', 'b', 'c', 'd']))
