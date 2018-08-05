//incomplete

function diskStacking(disks) {
  //sort by height
  disks.sort((a, b) => a[2] - b[2])
  //get just heights
  const heights = disks.map(disk => disk[2])
  //generate an array for combos
  const sequences = new Array(disks.length)

  let maxHeightIdx = 0
  for (let i = 1; i < disks.length; i++) {
    const currentDisk = disks[i]
    for (let j = 0; j < i; j++) {
      const otherDisk = disks[j]
      if (areValidDimensions(otherDisk, currentDisk)) {
        if (heights[i] <= currentDisk[2] + heights[j]) {
          heights[i] = currentDisk[2] + heights[j]
          sequences[i] = j
        }
      }
    }
    if (heights[i] >= heights[maxHeightIdx]) {
      maxHeightIdx = i
    }
  }
  console.log(sequences)
  return buildSequence(disks, sequences, maxHeightIdx)
}

function buildSequence(array, sequences, currentIdx) {
  const sequence = []
  while (currentIdx !== undefined) {
    sequence.unshift(array[currentIdx])
    currentIdx = sequence[currentIdx]
  }
  return sequence
}

function areValidDimensions(o, c) {
  return o[0] < c[0] && o[1] < c[1] && o[2] < c[2]
}

console.log(diskStacking([[2, 1, 2], [3, 2, 3], [2, 2, 8], [2, 3, 4], [1, 2, 1], [4, 4, 5]]))

