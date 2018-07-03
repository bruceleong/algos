function caesar(str, key) {
  const newLetters = [];
  const newKey = key % 26;
  for (const letter of str) {
    newLetters.push(getNewLetter(letter, key))
  }
  return newLetters
}

function getNewLetter(letter, key) {
  const newLetterCode = letter.charCodeAt() + key;
  return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + newLetterCode % 122)
}

console.log(caesar(['x', 'y', 'z'], 2))
