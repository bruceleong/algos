// function palindromePermutation(str) {
//   let palObj = {};

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') continue
//     else if (palObj[str[i]]) palObj[str[i]]++
//     else palObj[str[i]] = 1
//   }

//   let pals = [];
//   for (const letters in palObj) {
//     if (palObj[letters] % 2 !== 0) {
//       pals.push(letters)
//     }
//   }
//   console.log(pals, 'pals', palObj)
//   if (pals.length > 1) return false
//   else return true
// }

function palindromePermutation(str) {
  const letters = {}

  for (let i = 0; i < str.length; i++) {
    const letterToCheck = str[i]
    if (letterToCheck === ' ') {
      continue;
    } else if (letters[letterToCheck]) {
      delete letters[letterToCheck]
    } else {
      letters[letterToCheck] = 1
    }
  }
  console.log(letters)
  if (Object.keys(letters).length < 2) return true
  else return false
}

console.log(palindromePermutation('taco0 cat'))
console.log(palindromePermutation('aab'))
console.log(palindromePermutation('bbrruucece'))
