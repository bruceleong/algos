/*
String compressor - compress a string into groupings with the element and count, return new string

time => O(n) - n is each character in the string
space => O(n) - n in worst case is every character

*/

function stringCompressor(str) {
    let finalWord = ''
    let currentStr = str[0]
    let strCount = 1
    for (let i = 1; i < str.length; i++) {
      if (str[i] === currentStr) {
        strCount++
      } else {
        finalWord += currentStr + strCount
        currentStr = str[i]
        strCount = 1
      }
    }
    if (strCount > 1) finalWord += currentStr + strCount
    return finalWord
}

console.log(stringCompressor('aabbccaacccccc'), '--->', 'a2b2c2a2')
