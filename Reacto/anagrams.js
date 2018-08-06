//find all the anagrams within the array and output should be an array of array of anagrams
//time O(n Log n)
//space O(n)

function listAnagrams(arr) {
  const wordTable = {}
  const anagrams = []

  arr.forEach(element => {
    const sortedWord = element.split('').sort().join('')
    if (!wordTable[sortedWord]) {
      wordTable[sortedWord] = [element]
    } else {
      wordTable[sortedWord].push(element)
    }
  });
  Object.values(wordTable).forEach(element => {
    if (element.length > 1) {
      anagrams.push(element)
    }
  })
  return anagrams
}


const words = ['cat', 'act', 'ignore', 'a phrase', 'tape', 'pate', 'e hpsara'];
console.log(listAnagrams(words)); // [['cat', 'act'], ['a phrase', 'e hpsara'], ['tape', 'pate']]

