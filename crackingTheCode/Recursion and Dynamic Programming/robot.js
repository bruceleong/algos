function robotOnAGrid(end, offLimitArr, currentPath = [], start = [0, 0]) {

  const currentPosition = start
  let finalPath = null

  if (currentPosition[0] === end[0] - 1 && currentPosition[1] === end[1] - 1) return currentPath

  const down = [currentPosition[0] + 1, currentPosition[1]]
  const right = [currentPosition[0], currentPosition[1] + 1]

  // finalPath = null

  if (validPosition(down, offLimitArr)) {
    const newPath = currentPath.concat(['down'])
    finalPath = robotOnAGrid(end, offLimitArr, newPath,down)

  }

  if (finalPath === null && validPosition(right, offLimitArr)) {
    const newPath = currentPath.concat(['right'])
    finalPath = robotOnAGrid(end, offLimitArr, newPath, right)
  }

  return finalPath
}


function validPosition(nextPosition, offLimitPositions){
    for (let i = 0; i < offLimitPositions.length; i++){
        if (offLimitPositions[i][0] === nextPosition[0] && offLimitPositions[i][1] === nextPosition[1]){
            return false
        }
    }

    return true
}


console.log(robotOnAGrid([4, 4], [[1, 1], [1, 0], [0, 3], [2, 2]]))  // return ["right", "right", "down", "right", "down", "down"]
//console.log(robotOnAGrid([3, 3], [[1, 1], [1, 0]], [], [0,0]))  // return ['right', 'right', 'down', 'down']
