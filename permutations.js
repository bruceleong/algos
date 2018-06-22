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
    console.log('current perm', currentPermutation)
    permutations.push(currentPermutation)
  } else {
    for (let i = 0; i < array.length; i++) {
      // console.log(array[i], 'currrent eleelement')

      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      console.log(newArray, 'new Array')
      const newPermutation = currentPermutation.concat([array[i]])
      console.log(newPermutation, 'new perm')
      permutationsHelper(newArray, newPermutation, permutations)
    }
  }
}

// console.log(getPermutations(['a', 'b', 'c']))
// console.log(getPermutations(['a', 'b', 'c', 'd']))

function fib(n, obj = {}) {

  if (n === 0 || n === 1) {
    return n
  }
  else {
    if (obj[n]) {
      console.log(obj, 'currt obj')
      return obj[n]
    } else {
      console.log(obj, 'current obj')
      return obj[n] = fib(n - 1) + fib(n - 2)
    }
  }

}

console.log(fib(8))
