function validateBST(tree) {
  return validateHelper(tree, -Infinity, Infinity)
}

function validateHelper(tree, minVal, maxVal) {
  if (tree === null) return true
  if (tree.value < minVal || tree.value >= maxVal) return false
  const leftCheck = validateHelper(tree.left, minVal, tree.value)
  const rightCheck = validateHelper(tree.right, tree.value, maxVal)
  return leftCheck && rightCheck
}
