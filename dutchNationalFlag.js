//dutch national flag - given an array of integers and an index X - rearrange the arrar in order
const a = [3, 5, 2, 6, 8, 4, 4, 6, 4, 4, 3]
const i = 5

/*answer [3,2,3,4,4,4,4,5,6,8,6]*/

function swap(arr, first, next) {
  const temp = arr[first]
  arr[first] = arr[next]
  arr[next] = temp
}

function dutchNationalFlag(array, index) {
  // if (array === null || index < 0 || index >= array.length) return array;
  // console.log(array, index)
  let pivot = array[index]
  console.log(pivot)
  let low = -1, mid = -1, high = array.length;

  while (mid + 1  < high) {
    if (array[mid + 1] > pivot) {
      swap(array, high - 1, mid + 1);
      high--
    } else if (array[mid + 1] === pivot) {
      mid++
    } else {
      swap(array, mid + 1, low + 1);
      mid++
      low++
    }
  }
  return array
}

console.log(dutchNationalFlag(a, i))
