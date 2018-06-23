// function longestIncreasingSubsequence(array) {
//   const subSequenceArray = new Array(array.length - 1).fill(1)

//   for (let i = 0; i < array.length; i++) {
//     let currentNum = array[i]
//     for (let j = i + 1; j < array.length; j++) {
//       if (currentNum < array[j]) {
//         console.log(array[j])
//         subSequenceArray[i] += 1
//         currentNum = array[j]
//       }
//     }
//   }
//   console.log(subSequenceArray)

//   return Math.max(...subSequenceArray)
// }

function longestIncreasingSubsequence(sequence) {
  const lengths = new Array(sequence.length).fill(1);

  for (let i = 1; i < sequence.length; i++) {
    for (let j = 0; j < i; j++) {
      console.log(sequence[i], 'sequence i vs', sequence[j])
      //check 1: are we in an increasing sequence?
      const isIncreasing = sequence[j] < sequence[i];
      // console.log(isIncreasing)
      //check 2: what would be the sequence[i]'s sequence length if we added sequence[j]'s subsequence to it?
      //lengths[j] is the longest sequence so far that includes sequence[j], so we should build upon that
      const sequenceLength = lengths[j] + 1;
      // console.log(sequenceLength, 'sequence length')
      //check 3: is the subsequence that include sequence[j] and it's longest subsquence + sequence[i] LONGER than
      //the longest subsequence we have save in lengths for sequence[i] at lengths[i]?
      const isLonger = sequenceLength > lengths[i];
      // console.log(lengths, 'current lengths')

      //if check 1 and check 3 are true, save that new length to the lengths array at lengths[i]
      if (isIncreasing && isLonger) {
        lengths[i] = sequenceLength;
      }
    }
  }
  console.log(lengths)
  return Math.max(...lengths);
}

console.log(longestIncreasingSubsequence([3, 4, 1, 9]), '3');

// console.log(longestIncreasingSubsequence([3, 4, 2, 1, 10, 6]), '3');
// should return 3, the length of the longest increasing subsequence:
// 3, 4, 6 (or 3, 4, 10)
// console.log(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80]), '6');
// should return 6, the length of the maximum increasing subsequence:
// 10, 22, 33, 41, 60, 80 (or 10, 22, 33, 50, 60, 80)
// console.log(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28]), '9');
// should return 9, the length of the maximum increasing subsequence:
// 10, 20, 21, 23, 24, 25, 26, 27, 28
