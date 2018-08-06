function searchMatrix(matrix, target) {
  let row = 0
  let column = matrix[0].length - 1//start at the end of the first row - you're going down or left, that's it
  while (row < matrix.length && column >= 0) {
    const potential = matrix[row][column]
    console.log(potential, '======', [row, column])
    if (target > potential) {
      row++
    } else if (target < potential) {
      column--
    } else {
      return [row, column]
    }
  }
  return [-1, -1]
}

// console.log(searchMatrix([
//   [1, 4, 6, 12, 15, 1000],
//   [2, 5, 19, 30, 32],
//   [3, 8, 24, 33, 35, 1002]
// ], 1002))

console.log(searchMatrix([
  [1, 4, 6, 12, 15, 1000],
  [5, 6, 19, 30, 32],
  [3, 8, 24, 33, 35, 1002]
], 5))
