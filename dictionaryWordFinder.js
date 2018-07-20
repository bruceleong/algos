function definitionOf() {

}

// function definitionOf(str, dictionary) {
//   for (let i = 0; i < dictionary.length; i++) {
//     const word = dictionary[i].split(' ')[0]
//     if (word === str) {
//       return dictionary[i].slice(word.length + 3)
//     }
//   }
// }

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
console.log(definitionOf('be', dictionary), 'got it?', 'Exist'); // should return 'Exist'
console.log(definitionOf('that', dictionary), 'got it?', 'Used to identify....'); // should return 'Used to identify a specific person or thing observed or heard by the speaker'
console.log(definitionOf('to', dictionary), 'got it?', 'expressing motion in....'); // should return 'Expressing motion in the direction of (a particular location)'
console.log(definitionOf('wizbing', dictionary), 'got it?', 'undefined'); // should return undefined
