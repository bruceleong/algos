function findClosestValueInBst(tree, target) {
  let currentNode = tree;
  let closestNode = Infinity;

  while (currentNode) {
    if (Math.abs(closestNode - target) > Math.abs(currentNode.value - target)) {
      closestNode = currentNode.value
    } else if (target < currentNode.value) {
      currentNode = currentNode.left
    } else if (target > currentNode.value) {
      currentNode = currentNode.right
    } else {
      break;
    }
  }
  return closestNode;
}

let tree = {
  value: 6,
  left: {
    value: 2,
    left: {
      value: 0, left: null, right: null
    },
    right: {
      value: 4, left: {
        value: 3, left: null, right: null
      }, right: {
        value: 5, left: null, right: null
      }
    }
  },
  right: {
    value: 8, left: {
      value: 7, left: null, right: null
    }, right: {
      value: 9, left: null, right: null
    }
  }
}

console.log(findClosestValueInBst(tree, 3))
