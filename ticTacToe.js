function ticTacToe(arr) {
  //checking rows
  for (let i = 0; i < arr.length; i++) {
    if (gameChecker(arr[i]) === 1 || gameChecker(arr[i]) === 1 ) {
      return gameChecker(arr[i])
    }
  }
  return false
}

function gameChecker(arr) {
  let player;
  if (arr.includes(0)){
    return -1
  } else {
    player = arr[0]
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== player) return false
  }
  return player
}

//3 x 3, square, if 1 wins => 1. -1=> -1, neither won and empty spaces === 0, neither won and no empty spaces return 2.

console.log(ticTacToe([[1, 1, 1], [0, 1, 2], [2, 1, 0]]))
// console.log(gameChecker([1, 0, 2]))
