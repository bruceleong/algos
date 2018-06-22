function buildHash(arr) {
  let map = {}
  let sum = arr[0]
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i]
    map[i] = sum
    console.log(map, 'map')
    if (sum === 0) {
      return i
    }
  }
}
let array = [-1, -1, 2, 1]
console.log(buildHash(array))
