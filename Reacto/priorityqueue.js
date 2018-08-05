/*
Priority Queue -
as a LinkedList - FIFO

*/

function Node(data, num) {
  this.name = data.split(', ')[0]
  this.problem = data.split(', ')[1]
  this.priority = num
  this.next = null
}

class PriorityQueue {
  constructor() {
    this.first = null
    this.last = null
  }

  insert(data, priority) {
    //create new node first
    const newNode = new Node(data, priority)
    console.log(newNode)
    //is there a first? if not or the priority is higher, change it
    if (!this.first || this.first.priority < priority) {
      newNode.next = this.first
      this.first = newNode
    } else {
      //figure out where to insert
      let currentNode = this.first
      while (currentNode.next && currentNode.next.priority >= priority) {
        //traverse until there's a node you can insert
        newNode.next = currentNode.next
        currentNode = currentNode.next
      }
    }
  }

  peek() {
    return this.first.data
  }


  popMax() {
    const firstNode = this.first
    this.first = this.first.next
    return firstNode
  }
}


const pq = new PriorityQueue();
console.log(pq, 'test')
console.log(pq.insert('Jill, concussion', 7));
console.log(pq)
console.log(pq.insert('John, stomach pain', 5));
console.log(pq.peek()) // ==> 'Jill, concussion'
console.log(pq.peek()) // ==> 'Jill, concussion'  // Jill is still in the PQ
console.log(pq.insert('Dave, sprained ankle', 1));
console.log(pq.insert('Bob, breathing problems', 8))
console.log(pq.peek()) // ==> 'Bob, breathing problems'
console.log(pq.popMax(), 'pop max - bob') // ==> 'Bob, breathing problems'
console.log(pq)
console.log(pq.peek()) // ==> 'Jill, concussion' // Bob has been removed from the PQ
