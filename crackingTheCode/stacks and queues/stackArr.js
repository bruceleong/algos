class Stack {
  constructor() {
    this.stackArr = [
      new LinkedList(), new LinkedList(), new LinkedList()
    ]
  }

  insert (stackNum, ele) {
    this.stackArr[stackNum].push(ele)
  }

  remove (stackNum) {
    return this.stackArr[stackNum].pop()
  }

  peek (stackNum) {
    return this.stackArr[stackNum].length > 0
  }

}

let stacks = new Stack()
stacks.insert(1, 5)
stacks.insert(1,11)
stacks.insert(1,12)
stacks.insert(2,101)
stacks.insert(2,102)
stacks.insert(0, 'stuff')
stacks.insert(0, 'blah')
stacks.peek(1)
console.log(stacks)


class LinkedList {
  constructor() {
    this.head = null
  }

  insert (ele) {
    let newNode = new Node(ele)
    this.head = newNode
  }

  remove () {
    let prevHead = this.head
    this.head = this.head.next
    return prevHead
  }
}
