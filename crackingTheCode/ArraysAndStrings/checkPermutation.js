/*
Given two strings, write a method to decide if one is a permutation of the other
time and space O(n)
 */

 /*

 questins to ask -
 1. is this case sensitive? 'God' !== 'dog'
 2. is white space significant? 'bruce   ' === 'bruce'

 */

function checkPermutation(str1, str2) {
  let sortedStr1 = str1.split('').sort().join('')
  let sortedStr2 = str2.split('').sort().join('')

  if (sortedStr1 !== sortedStr2) return false
  else return true
}

function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false
  const strObj = {}
  //time 0(n)
  for (let i = 0; i < str1.length; i++) {
    if (strObj[str1.charCodeAt(i)]) {
      strObj[str1.charCodeAt(i)]++
    } else {
      strObj[str1.charCodeAt(i)] = 1
    }
  }
  //time 0(n)
  for (let j = 0; j < str2.length; j++) {
    // console.log(strObj, 'current obj')
    // console.log(str2.charCodeAt(j), 'current checking in str2')
    if (strObj[str2.charCodeAt(j)]) {
      strObj[str2.charCodeAt(j)]--
      // console.log(strObj)
    } else {
      return false
    }
  }
  //space 0(n)
  for (const numLetters in strObj) {
    if (strObj[numLetters] > 0) return false
  }
  return true
}

console.log(checkPermutation('aba', 'aab'), 'true')

console.log(checkPermutation('123456789', '1234569810'), 'false')
