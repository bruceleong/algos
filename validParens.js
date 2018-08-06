// function bracketMatch(text) {
//   let counter = 0
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === '(') counter++
//     else if (text[i] === ')') counter--

//     if (counter < 0) counter += 2
//   }
//   return counter
// }
//cuts out if there's a negative
function bracketMatch(text) {
  let counter = 0
  for (let i = 0; i < text.length && counter >= 0; i++) {
    if (text[i] === '(') counter++
    else if (text[i] === ')') counter--
  }
  return counter === 0
}

console.log(bracketMatch('()'), '0')
console.log(bracketMatch(')('), '2')
console.log(bracketMatch('(()'), '1')
console.log(bracketMatch('(())'), '0')
console.log(bracketMatch('())('), '2')
