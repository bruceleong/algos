function Node(val, left = null, right = null) {
  this.value = val
  this.left = left
  this.right = right
}

function buildBST(arr, start = 0, end = arr.length - 1) {

  const midPoint = Math.floor((start + end) / 2)

  if (start === end){
    return new Node(arr[start])
  } else {
    const root = new Node(arr[midPoint])
    root.left = buildBST(arr, start, midPoint - 1)
    root.right = buildBST(arr, midPoint + 1, end)
    return root
  }
}


console.log(buildBST([1, 2, 3, 4, 5, 6, 7]))
