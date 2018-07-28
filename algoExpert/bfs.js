//breath first search
class Node {
  constructor(name) {
    this.name = name;
    this.children = []
  }

  addChild(name) {
    this.children.push(new Node(name))
    return this
  }

  breathFirstSearch(array) {
    let queue = [this]
    while (queue.length > 0) {
      const currentNode = queue.shift()
      array.push(currentNode.name)
      for (const child of currentNode.children) {
        queue.push(child)
      }
    }
    return array
  }
}

const test3 = new Node('A')
test3.addChild('b')
test3.addChild('c')
test3.addChild('d')
test3.addChild('e')


console.log(test3.breathFirstSearch([]))
