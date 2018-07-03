function getPermutations(array) {
  const perms = [];
  permHelper(array, [], perms)
  return perms
}

function permHelper(array, currentPermutation, perms) {
  if (!array.length && currentPermutation.length) {
    perms.push(currentPermutation)
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1))
      const newPerm = currentPermutation.concat([array[i]])
      permHelper(newArray, newPerm, perms)
    }
  }
}

console.log(getPermutations(['a', 'b', 'c']))
// console.log(getPermutations(['a', 'b', 'c', 'd']))


































// function getPermutations(array) {
//   const permutations = [];
//   permutationsHelper(array, [], permutations)
//   return permutations
// }

// function permutationsHelper(array, currentPermutation, permutations) {

//   //base case
//   if (!array.length && currentPermutation.length) {
//     permutations.push(currentPermutation)
//   } else {
//     for (let i = 0; i < array.length; i++) {

//       const newArray = array.slice(0, i).concat(array.slice(i + 1));
//       const newPermutation = currentPermutation.concat([array[i]])
//       permutationsHelper(newArray, newPermutation, permutations)
//     }
//   }
// }
