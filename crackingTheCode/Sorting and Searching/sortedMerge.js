function sortedmerge(arrA, arrB) {
  let aIdx = arrA.length - 1;
  let bIdx = arrB.length - 1;
  let idxMerged = arrA.length + arrB.length - 1

  while (bIdx >= 0) {
    //if the end of a is bigger than the end of b.... add
    if (aIdx >= 0 && arrA[aIdx] > arrB[bIdx]) {
      arrA[idxMerged] = arrA[aIdx]
      console.log(arrA, 'changing array')
      aIdx--;
    } else {
      arrA[idxMerged] = arrB[bIdx]
      console.log(arrA, 'changing b arr')
      bIdx--;
    }
    idxMerged--;
  }
  return arrA
}

console.log(sortedmerge([1, 3, 6], [2, 4, 5] ))
