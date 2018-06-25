function getPermutations(array) {
  const permutations = [];
  permutationsHelper(array, [], permutations)
  // console.log(permutations, 'final permutations')
  return permutations
}

function permutationsHelper(array, currentPermutation, permutations) {
  // console.log('-array--', array, '--cur per', currentPermutation, '--perms--', permutations )

  //base case
  if (!array.length && currentPermutation.length) {
    console.log('current perm being pushed', currentPermutation)
    permutations.push(currentPermutation)
  } else {
    for (let i = 0; i < array.length; i++) {
      console.log('current array', array)

      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      console.log(newArray, 'new Array')
      const newPermutation = currentPermutation.concat([array[i]])
      console.log(newPermutation, 'new perm')
      permutationsHelper(newArray, newPermutation, permutations)
    }
  }
}

console.log(getPermutations(['a', 'b', 'c']))
// console.log(getPermutations(['a', 'b', 'c', 'd']))
