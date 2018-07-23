// function solution(A) {
//   let twoDigits = [];
//   for (let i = 0; i < A.length; i++) {
//       if (A[i] >= 10 && A[i] <= 100 ) {
//         twoDigits.push(A[i])
//       }
//   }
//   let currentMax = twoDigits[0]
//   for (let j = 0; j < twoDigits.length; j++) {
//     currentMax = Math.max(currentMax, twoDigits[j])
//   }
//   return currentMax
// }

// console.log(solution([-6, 90, 20, -91, 1011, -100, 84, -22, 0, 1, 473]))

function solution(A) {
  A.sort((a, b) => a - b)
  // console.log(A)
  let smallestDifference = Infinity

  for (let i = 1; i < A.length - 1; i++) {
    let startdiff = A[i] - A[i - 1]
    let nextDiff = A[i + 1] - A[i]
    // console.log(startdiff, nextDiff)
    smallestDifference = Math.min(startdiff, nextDiff, smallestDifference)
  }
  return smallestDifference
}

console.log(solution([7, 21, 3, 42, 3, 7]))
console.log(solution([8, 24, 3, 20, 1, 17]))
"00:01:07,400-234-090
   00:05:01,701-080-080
   00:05:00,400-234-090"
