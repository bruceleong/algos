/*

binary search

TIme = O(nLogn)
Space = 0(1)

write a function
*/

let array = [0, 1, 21, 33, 45, 59, 61, 71, 72]
let targetSum = 33

//answer = 3

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let midpoint = Math.floor((left + right) / 2)
    console.log(array[midpoint])
    if (target === array[midpoint]) {
      return midpoint
    } else if (target > array[midpoint]) {
      left = midpoint
    } else if (target < array[midpoint]) {
      right = midpoint
    }
  }
  return -1
}

console.log(binarySearch(array, targetSum))



const dictionary = [
  'a - Used when mentioning someone or something for the first time in a text or conversation',
  'and - Used to connect words of the same part of speech, clauses, or sentences, that are to be taken jointly',
  'be - Exist',
  'in - Expressing the situation of something that is or appears to be enclosed or surrounded by something else',
  'of - Expressing the relationship between a part and a whole',
  'that - Used to identify a specific person or thing observed or heard by the speaker',
  'the - Denoting one or more people or things already mentioned or assumed to be common knowledge',
  'to - Expressing motion in the direction of (a particular location)'
];
console.log(definitionOf('be', dictionary)); // should return 'Exist'
console.log(definitionOf('that', dictionary)); // should return 'Used to identify a specific person or thing observed or heard by the speaker'
console.log(definitionOf('to', dictionary)); // should return 'Expressing motion in the direction of (a particular location)'
console.log(definitionOf('wizbing', dictionary)); // should return undefined
