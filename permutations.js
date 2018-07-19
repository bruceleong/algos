function getPermutations(array) {
  const perm = [];
  permutationBuilder(array, [], perm)
  return perm;
}

function permutationBuilder(array, currentPerms, totalPerms) {
  if (!array.length && currentPerms.length) {
    totalPerms.push(currentPerms)
  } else {
    for (let i = 0; i < array.length; i++) {
      let newArray = array.slice(0, i).concat(array.slice(i + 1))
      let newPerm = currentPerms.concat([array[i]])
      permutationBuilder(newArray, newPerm, totalPerms)
    }
  }
  return totalPerms
}


console.log(getPermutations(['a', 'b', 'c']))
// console.log(getPermutations(['a', 'b', 'c', 'd']))
