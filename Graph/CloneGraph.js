
// Definition for a Node.
class Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
};

/**
 * @param {Node} node
 * @return {Node}
 */
 // mark visited nodes to copy them once
 // recursively iterate over neighbours to visit all nodes
 // copy each unvisited neighbour and link to its neighbour
 // return 
 var cloneGraph = function(node) {
    if (!node) {
        return null
    }

    let clone = {}

    function dfs(curr) {
        clone[curr.value] = new Node(curr.value)

        for(let neighbor of curr.neighbors) {
            if (!clone[neighbor]) {
                dfs(neighbor)
            }
            clone[curr.val].neighbors.push(clone[neighbor.value])
        }
    }

    dfs(node)
    return clone[node.val]
};

const graph = new Node(1, [new Node(2, [new Node(1)]), new Node(4)], )