//

const numToBinaryOnes = (num) => {
  let currentMatchMax = 0;
  let continuous1s = 0;
  let binaryNumString = Number(num).toString(2)
  console.log(binaryNumString)

  for (let i = 0; i < binaryNumString.length; i++) {
    if (binaryNumString[i] === '1') {
      continuous1s += 1
      if (continuous1s > currentMatchMax) {
        currentMatchMax = continuous1s
      }
    } else {
      continuous1s = 0
    }
  }
  return currentMatchMax
}

//testCases
console.log(numToBinaryOnes('2928018016900296589618184185' )) //12
console.log(numToBinaryOnes(500)) //5
console.log(numToBinaryOnes(200)) //2
console.log(numToBinaryOnes(30)) //4
console.log(numToBinaryOnes(5)) //1
console.log(numToBinaryOnes(13)) //2
console.log(numToBinaryOnes(131)) //2
