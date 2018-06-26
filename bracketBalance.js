function bracketMatch(text) {
 let diffCounter = 0, ans = 0;
 for (let i = 0; i < text.length; i++) {
   if (text[i] === '(') diffCounter += 1
   else if (text[i] === ')') diffCounter -= 1
   if ( diffCounter < 0) {
    diffCounter += 1
    ans += 1
   }
 }
 return ans + diffCounter
}

console.log(bracketMatch(')('), '2')
console.log(bracketMatch('(()'), '1')
console.log(bracketMatch('(())'), '0')
console.log(bracketMatch('())('), '2')
