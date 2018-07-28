function iterativeBinaryTree(tree, callback) {
  let previous = null;
  let next = null;
  let current = tree;

  while (current !== null) {
    if (previous === null || previous === current.parent) {
      if (current.left !== null) {
        next = current.left
      } else {
        callback(current)
        next = current.right !== null ? current.right : current.parent
      }
    } else if (previous === current.left) {
      callback(current)
      next = current.right !== null ? current.right : current.parent
    } else {
      next = current.parent
    }
    previous = current
    current = next
  }

}
