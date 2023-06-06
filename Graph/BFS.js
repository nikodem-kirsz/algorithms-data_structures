function bfs(graph, startNode) {
    const visited = new Set()
    let queue = [startNode]

    visited.add(startNode)

    while(queue.length) {
        const currentNode = queue.shift()
        console.log(currentNode)

        const neighbours = graph[currentNode]
        for(let i=0; i<neighbours.length; i++) {
            const neighbour = neighbours[i]
            if (!visited.has(neighbour)) {
                visited.add(neighbour)
                queue.push(neighbour)
            }
        }
    }


}

const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A'],
    D: ['B']
  };
  
  bfs(graph, 'A');