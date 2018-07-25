class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    addMany(values) {
        let current = this;
        while (current.next !== null) {
            current = current.next
        }
        for (const value of values) {
            current.next = new LinkedList(value)
            current = current.next
        }
        return this
    }

    getNodesInArray() {
        const nodes = [];
        let current = this;
        while (current !== null) {
            nodes.push(current.value)
            current = current.next
        }
        return nodes
    }
}

const test1 = new LinkedList(0).addMany([1, 2, 2, 4, 4, 5])

function removeDuplicates(root) {
    let current = root
    let seenObj = {}
    seenObj[current.value] = true

    while (current.next) {
      if (seenObj[current.next]) {
        current.next = current.next.next
        current = current.next
      } else {
        seenObj[current.next] = true
        current = current.next
      }
    }
    return root
  }

console.log(removeDuplicates(test1))
//   function removeDuplicatesNoBuffer(root) {
//     let current = root
//     let runner = current.next;

//     while (current.next) {
//       // value = 5
//       while (runner.next) {
//         if (runner.value = current.value) {
//           runner.next = runner.next.next
//         }
//       }
//     }
//     return root
//   }
