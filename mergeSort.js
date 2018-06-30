function mergeSort(array) {
  if (array.length < 2) return array;
  let splits = split(array)
  let left = splits[0];
  let right = splits[1];
  return merge(mergeSort(left), mergeSort(right))
}

function split(array) {
  let center = array.length / 2;
  let left = array.slice(0, center);
  let right = array.slice(center)
  return [left, right]
}

function merge(left, right) {
  let merged = [];
  let leftIdx = 0;
  let rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx])
      leftIdx++
    } else {
      merged.push(right[rightIdx])
      rightIdx++
    }
  }
  for (; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx])
  for (; rightIdx < right.length; rightIdx++) merged.push(right[rightIdx])
  return merged
}

console.log(mergeSort([8, 5, 2, 9, 5, 6, 3]), '[2, 3, 5, 5, 6, 8, 9]')

