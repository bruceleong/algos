//find all the anagrams within the array and output should be an array of array of anagrams

function listAnagrams(arr) {
  const wordTable = {};
  const anagrams = []

  arr.forEach(element => {
    const wordKey = element.split('').sort().join('')
    if (wordTable[wordKey]) {
      wordTable[wordKey].push(element)
    } else {
      wordTable[wordKey] = [element]
    }
  });

  Object.keys(wordTable).forEach(wordKey => {
    const anagram = wordTable[wordKey]
    if (anagram.length > 1) {
      anagrams.push(anagram)
    }
  })
  return anagrams
}

const words = ['cat', 'act', 'ignore', 'a phrase', 'tape', 'pate', 'e hpsara'];
console.log(listAnagrams(words)); // [['cat', 'act'], ['a phrase', 'e hpsara'], ['tape', 'pate']]
