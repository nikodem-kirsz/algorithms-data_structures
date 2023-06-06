class Node {
    constructor(val, left = null, right = null, next = null) {
        this.val = val
        this.left = left
        this.right = right
        this.next = next
    }
}

var connect = function(root) {
    if (!root) {
        return null
    }
    let queue = [root]
    while(queue.length) {
        let levels = []
        let length = queue.length // 1
        for(let i=0; i<length; i++) {
            let currentNode = queue.shift()
            if (levels.length > 0) {
                levels[levels.length - 1].next = currentNode
            }
            levels.push(currentNode)
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
    }  
    return root
};

var connectRecursive = function(root) {
    if (!root) {
        return null
    }
    let levels = []
    function traverse(node, level = 0) {
        if (node === null) {
            return
        }
        if (levels.length === level) levels.push([])
        if (levels[level].length > 0) {
            levels[level][levels[level].length - 1].next = node
        }
        levels[level].push(node)
        if (node.left) {
            traverse(node.left, level+1)
        }
        if (node.right) {
            traverse(node.right, level+1)
        }
    }

    traverse(root)
    return root
}

let tree = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6), new Node(7)))
// console.log(tree)
console.log(connectRecursive(tree))

