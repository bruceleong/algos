/*

time and space O(n)

*/

function caesar(str, key) {
  let finalCode = ''
  const newKey = key % 26
  for (let i = 0; i < str.length; i++) {
    let newLetter = getNewLetter(str[i], newKey)
    finalCode += newLetter
  }
  return finalCode
}

function getNewLetter(letter, key) {
  const newLetterKey = letter.charCodeAt() + key
  return newLetterKey <= 122 ? String.fromCharCode(newLetterKey) : String.fromCharCode(96 + newLetterKey % 122)
}

console.log(caesar('xyz', 2))
