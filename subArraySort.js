function subArraySort(array) {
  //two pointers
  //earliest number, less than previous
  let earliest, last;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i - 1] > array[i]) {
      earliest = i
      break;
    }
  }
  for (let j = array.length; j > 0; j--) {
    if (array[j] < array[j - 1]) {
      console.log(array[j], 'index', j)
    }
  }
}


// let arr = [1, 3, 2, 4]
let arr = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]

console.log(subArraySort(arr))
