class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    //implement with siftdown - grab last parent
    const firstParentIdx = Math.floor((array.length - 2) / 2)

    //start at the bottom and go to the top
		for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
			this.siftDown(currentIdx, array.length - 1, array)
		}
		return array
  }

  siftDown(currentIdx, endIdx, heap) {
		let childOneIdx = currentIdx * 2 + 1
		//siftDown to parents, not leafs
		while (childOneIdx <= endIdx) {
      //is our child two within the heap? if not -1
			const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1
      let idxToSwap
      //if there is a child 2 and it's less than child one we
			if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        //we swap child 2
        idxToSwap = childTwoIdx
			} else {
        //if not, we swap 1
				idxToSwap = childOneIdx
      }

      //compare smaller child with current
			if (heap[idxToSwap] < heap[currentIdx]) {
        //then we swap
				this.swap(currentIdx, idxToSwap, heap)
        //continue to move down further to check additional parent nodes
        currentIdx = idxToSwap
				childOneIdx = currentIdx * 2 + 1
      }
      //if the smaller child is bigger than the current, we DO NOT swap
      else {
				return;
			}
		}
  }

  siftUp(currentIdx, heap) {
    //find the parent node
     let parentIdx = Math.floor((currentIdx - 1) / 2)
     //condition => you've reached the root or something is out of place
		while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      //swap them
      this.swap(currentIdx, parentIdx, heap)
      //go back up since you just swapped to the parent of the current & find the new parent and check
			currentIdx = parentIdx
			parentIdx = Math.floor((currentIdx - 1) / 2)
		}
  }

  peek() {
    //return the first element in the min heap
    return this.heap[0]
  }

  remove() {
    //first swap last / first
    this.swap(0, this.heap.length - 1, this.heap)
    //pop off last element
    const valueToRemove = this.heap.pop()
    //sift down to proper position
    this.siftDown(0, this.heap.length - 1, this.heap)
    //return value
		return valueToRemove
  }

  insert(value) {
    //add in the value to the end
    this.heap.push(value)
    //sift the value up to the appropriate spot
		this.siftUp(this.heap.length - 1, this.heap);
  }

	swap(i, j, heap) {
    //swap current with target
		const temp = heap[j]
		heap[j] = heap[i]
		heap[i] = temp
	}
}

const minHeap = new MinHeap([48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41])

console.log(minHeap)
