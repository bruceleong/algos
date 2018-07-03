function listAnagrams (wordsArr) {
  const wordsTable = {};
  wordsArr.forEach(function (word) {
    // in order to sort a string we must convert it into an array of its characters
    const wordKey = word.split('').sort().join('');
    // if this sorted entry already exists push the word into the array with its sibling anagrams
    if (wordsTable[wordKey]) {
      wordsTable[wordKey].push(word);
    }
    // or if we have not yet visited any anagrams of this word, create a new array for it
    else wordsTable[wordKey] = [word];
  });
  const output = [];
  Object.keys(wordsTable).forEach(function (wordKey) {
    const anagrams = wordsTable[wordKey];
    // only include lists with more than one anagram
    if (anagrams.length > 1) {
      output.push(anagrams);
    }
  });
  return output;
}

const words = ['cat', 'act', 'ignore', 'a phrase', 'tape', 'pate', 'e hpsara'];
console.log(listAnagrams(words)); // [['cat', 'act'], ['a phrase', 'e hpsara'], ['tape', 'pate']]
