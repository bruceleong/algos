//Time O(n * m) - Space O(1)
function indexOf (needle, haystack) {
  //loop through the haystack up to the length of the needle
  for (let i = 0; i <= haystack.length - needle.length; i++) {

    //start iterting through the needle
    for (let j = 0; j < needle.length; j++) {
      // where the haystack starts that will be the first i of the needle
      if (haystack[i + j] !== needle[j]) break;

      //if j becomes the length of the needle return the haystack's i
      if (j + 1 === needle.length) return i
    }
  }

  return -1
}

console.log(indexOf('or', 'hello world'), 'correct or not 7'); // should return 7
console.log(indexOf('hello world', 'or'), 'correct or not -1'); // should return -1
console.log(indexOf('howdy', 'hello world'), 'correct or not -1'); // should return -1
console.log(indexOf('oox', 'ooboxoooxo'), 'correct 6'); // should return 6
