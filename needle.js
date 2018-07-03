function indexOf (needle, haystack) {
  for (let hIdx = 0; hIdx <= haystack.length - needle.length; hIdx++) {
    //O(n * ...) where n is the number of letters in haystack
    for (let nIdx = 0; nIdx < needle.length; nIdx++) {
      //O(m * ...) where m is the number of letters in needle
      if (haystack[hIdx + nIdx] !== needle[nIdx]) break;
      //O(1) constant
      if (nIdx + 1 === needle.length) return hIdx;
      //O(1) constant
    }
  }
  return -1;
}


console.log(indexOf('or', 'hello world'), '7'); // should return 7
console.log(indexOf('hello world', 'or'), '-1'); // should return -1
console.log(indexOf('howdy', 'hello world'), '-1'); // should return -1
console.log(indexOf('oox', 'ooboxoooxo'), '6'); // should return 6
