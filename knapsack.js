let items = [[1, 2], [4, 3], [5, 6], [6, 7]]
let capacity = 10
function knapsackProblem(items, capacity) {
  console.log(items)
  items.unshift([])
  console.log(items)
	const grid = new Array(items.length).fill(new Array(capacity+1).fill(0))

  for (let i = 1; i < items.length; i++) {
    for (let j = 1; j < capacity; j++) {
      if ( j < items[i][1]) {
        grid[i][j] = grid[i - 1][j]
      } else {
        grid[i][j] = grid[i - 1][j-items[i][1]] + items[i][0]
      }
    }
  }

}

console.log(knapsackProblem(items, capacity))
