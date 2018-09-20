/*
given a 2d matrix - filled with 0 and 1s - determine the length of 1s that are adjacent (not diagonal), return their length

solution:
-keep track of each visited node, to not revisit
-visit each element and if it is a river, do a depth-first seach to find if its neighbors are valid
helpers -
 -loop through 2d array (nested for loop)
 -get neigbors
 -traversal
 -check if visited
*/

function riverSizes(matrix) {
  const sizes = []
  //2d matrix same cols / rows of matrix to determine if visited
  const visited = matrix.map(row => row.map(value => false))
  //loop through each node
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;
      //traverse
      traverseNode(i, j, matrix, visited, sizes)
    }
  }
  return sizes
}

function traverseNode(i, j, matrix, visited, sizes) {
  let currentRiverSizes = 0
  const nodesToExplore = [[i, j]]
  console.log(nodesToExplore)
  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop()
    i = currentNode[0]
    j = currentNode[1]
    if (visited[i][j]) {
      console.log('visited')
      continue;
    } else {
      // console.log(' not visited', visited[i][j])
      visited[i][j] = true;
    }
    if (matrix[i][j] === 0) {
      console.log('not a river')
      continue;
    } else {
      // console.log('start of a river')
      currentRiverSizes++
    }
    const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited)
    console.log('am i checking their neighbors')
    for (const neighbor of unvisitedNeighbors) {
      nodesToExplore.push(neighbor)
    }
  }
  // console.log(currentRiverSizes, 'current size?')
  if (currentRiverSizes > 0) sizes.push(currentRiverSizes)
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  const unvisitedNeighbors = []
  // top node
  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j])
  //bottom
  if (i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j])
  //left
  if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1])
  //right
  if (j < matrix[0].length - 1 && !visited[i][j + 1]) unvisitedNeighbors.push([i, j + 1])

  return unvisitedNeighbors
}

console.log(riverSizes([
  [1, 0, 0, 1],
  [1, 0, 1, 0],
  [0, 0, 1, 0],
  [1, 0, 1, 0]
]), '[1, 1, 2, 3]')

console.log(riverSizes([[0, 0, 0], [0, 0, 0]]))
