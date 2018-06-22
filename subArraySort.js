function subArraySort(array) {
  let right, left;
  let tracker = {}
  for (let i = array.length - 1; i > 0; i--) {
    if (array[i - 1] > array[i] && array[i] < array[i + 1]) {
      let outOfPlace = array[i + 1];
      console.log(outOfPlace)
      // for (let inner = 0; inner < array.length; inner++) {

      // }
    }
  }
}

// let arr = [1, 2, 3, 4]
let arr = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]

console.log(subArraySort(arr))
