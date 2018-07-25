function oneAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) return false
  else if (str1.length - str2.length === 0) return replace(str1, str2)
  else if (str1.length - str2.length === -1) return remove(str1, str2)
  else return insert(str1, str2)
}

function remove(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (str2.slice(0, i) + str2.slice(i + 1, str2.length) !== str1) return false
    }
  }
  return true
}

function replace(str1, str2) {
  let replaced = false
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i] && replaced === false) {
      replaced = true
    } else {
      return false
    }
  }
  return true
}

function insert(str1, str2) {
  let needInsert = false
  let str1Idx = 0;
  let str2Idx = 0;

  while (str1Idx < str1.length) {
    if (str1[str1Idx] !== str2[str2Idx]){
      if (needInsert === true) {
        return false
      } else {
        str1Idx++
      }
    }

    str1Idx++
    str2Idx++
  }
  return true
}

console.log(oneAway('pale', 'ple'), true)
console.log(oneAway('pales', 'pale'), true)
console.log(oneAway('pale', 'bake'), false)
console.log(oneAway('bruce', 'bru'), false)
console.log(oneAway('bruce', 'br'), false)
console.log(oneAway('br', 'bru'), true)
