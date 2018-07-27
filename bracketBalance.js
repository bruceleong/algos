function bracketMatch(text) {
  let counter = 0
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '(') counter++
    else if (text[i] === ')') counter--

    if (counter < 0) counter += 2
  }
  return counter
}

console.log(bracketMatch('()'), '0')
console.log(bracketMatch(')('), '2')
console.log(bracketMatch('(()'), '1')
console.log(bracketMatch('(())'), '0')
console.log(bracketMatch('())('), '2')
