function bubbleSort(array) {
  let swap = false, counter = 0;
  while (swap === false) {
    swap = true
    for (let index = 0; index < array.length - 1; index++) {
      counter++;
      if (array[index] > array[index + 1]) {
        swap = false
        let swapEle = array[index + 1]
        array[index + 1] = array[index]
        array[index] = swapEle
      }

    }
  }
  return [array, counter]
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]))
