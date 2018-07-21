/*
nesting loop is ok, but will add to time complexity
*/
function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 1 + i; j < str.length; j++) {
      console.log(str[i], 'current checking str')
      console.log(str[j], 'inner loop')
      if (str[i] === str[j]) return false;
    }
  }
  return true
}

/*
Lowers the time complexity to O(n) => n === length of string
space 0(n) worst case we have to go through each letter
*/
function isUnique(str) {
  const uniqueObj = {};
  for (let i = 0; i < str.length; i++) {
    if (uniqueObj[str[i]] === true) return false
    else uniqueObj[str[i]] = true
  }
  return true
}

console.log(isUnique('bruce'), 'true')
console.log(isUnique('brucee'), 'false')
console.log(isUnique('macbook pro'), 'false')
