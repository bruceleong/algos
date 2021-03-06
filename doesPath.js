//time O(n)
//space O(n)

const doesPathExist = (graph, start, target, visited = {}) => {
  //if there are no nodes connected to the start, return false
  if (!graph[start]) return false
  //start tracking visited nodes --> visited = {start: true}
  visited[start] = true;
  return graph[start].some((vertex) => {
    //if this item in the array is the end of the path, return true
    if (vertex === target) return true;
    // console.log('*********', visited, 'visited vertices or nodes*********')
    //if we have not yet visited this item in the array, keep looking by recursing
    if (!visited[vertex]) {
      // console.log('########',vertex, 'vertex we need to check########')
      return doesPathExist(graph, vertex, target, visited);
      //else, if we have already visited this item in the array, that means we do not want to keep looking infinitely
    } else {
      return false;
    }
  });
}

//GRAPH 1
const graph = {
  a: ['b'],
  b: ['c', 'd'],
  c: ['d'],
  d: [],
}

//GRAPH 1 OUTPUTS
console.log(doesPathExist(graph, 'a', 'b'), 'TRUE') // true
console.log(doesPathExist(graph, 'a', 'e'), 'FALSE') // false

console.log(doesPathExist(graph, 'a', 'd'), 'TRUE') // true
console.log(doesPathExist(graph, 'a', 'a'), 'FALSE') // false
