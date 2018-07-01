function findClosestValueInBst(tree, target) {
  let currentNode = tree, closestNode = Infinity;

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
