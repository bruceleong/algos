/*

time: O(n)
space: O(1)
*/

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

// let bstree = {
//   value: 2, left: {value: 0}, right: {
//     value: 4
//   }
// }

const lowestCommonAncestor = function(root, p, q) {
  if (root === null) {
    return null
  };
  if (root.value === p || root.value === q) {
    // console.log(root)
    return root
  }
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)

  if (left !== null && right !== null ) {
    return root
  } else if (left === null && right === null ) {
    return null
  }
  return left !== null ? left : right
};

// console.log(lowestCommonAncestor(tree, 3, 9), '----', 6)
console.log(lowestCommonAncestor(tree, 7, 9), '---', 8)
// console.log(lowestCommonAncestor(tree, 3, 5), '--', 4)
// console.log(lowestCommonAncestor(bstree, 0, 4))
