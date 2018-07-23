function palindromePermutation(str) {
  let palObj = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue
    else if (palObj[str[i]]) palObj[str[i]]++
    else palObj[str[i]] = 1
  }
  const counts = Object.values(palObj).sort((a, b) => a - b)

}

console.log(palindromePermutation('taco cat'))
