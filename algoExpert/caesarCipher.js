/*

time and space O(n)

*/
function caesar(str, key) {
  /*
  loop through each letter
  */
  const newKey = key % 27
  let newWord = ''
  console.log(newKey)

  for (let i = 0; i < str.length; i++) {
    newWord += assignNew(str[i], newKey)
  }
  return newWord
}

function assignNew(letter, key) {
  const newLetterCode = letter.charCodeAt() + key
  return newLetterCode > 122 ? String.fromCharCode(newLetterCode % 122 + 96) : String.fromCharCode(newLetterCode);
}

console.log(caesar('xyz', 2))
// console.log(caesar('ab', 1))
