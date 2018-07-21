/*
Write a method to replace all the spaces in a string with '%20'. You may assume that the string has suffience space at the end to hold the additional characters, and that you are given the 'true' length of the string

input = 'mr john smith     '
output = 'mr%20john%smith'

*/

function URLify(str) {
  const strToFormat = str.split(' ').filter((ele) => { if (ele.length > 0) return ele })
  // console.log(strToFormat)
  let finalURL = ''
  if (strToFormat[0].length > 0) finalURL += strToFormat[0]
  for (let i = 1; i < strToFormat.length - 1; i++) {
    if (strToFormat[i].length > 0) finalURL += `%20${strToFormat[i]}`
    console.log(strToFormat[i])
  }

  if (strToFormat[strToFormat.length - 1].length > 0) finalURL += `%20${strToFormat[strToFormat.length - 1]}`

  return finalURL
}

console.log(URLify('  mr smith  ;;;;'), 'mr%20john%20smith')
