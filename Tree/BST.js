class Node {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        } else {
            let currentNode = this.root
            while (true) {
                if (currentNode.value === value) return undefined
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                }
                if (value > currentNode.value) {
                    if (!currentNode.right) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }

    find(value) {
        if (!this.root) return false
        return this.find_helper(this.root, value)
    }
    
    find_helper(node, value) {
        if (node.value > value && node.left) {
            return this.find_helper(node.left, value)
        }
        if (node.value < value && node.right) {
            return this.find_helper(node.right, value)
            }
        return value === node.value
    }

    remove(value) {
        if (!this.root) return false
        let currentNode = this.root
        let parentNode = null // keep track of parent node
        while(currentNode) {
            if (currentNode.value === value) {
                // Case 1 has no children
                    if (!currentNode.left && !currentNode.right) {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = null
                        }
                        else {
                            parentNode.right = null
                        }
                    }
                // Case 2 has only left child
                    else if (!currentNode.right) {
                      if (this.root = currentNode) {
                        this.root = currentNode.left
                      }
                      // parent node is lesser than currentValue
                      if (parentNode.value < currentNode.value) {
                        parentNode.right = currentNode.left
                        return currentNode
                      }
                      // parent node is greater than currentValue 
                      else {
                        parentNode.left = currentNode.left
                        return currentNode
                      }
                    }
                // Case 3 has only right child
                    else if (!currentNode.left) {
                        if (this.root = currentNode) {
                            this.root = currentNode.right
                        }
                        // parent node is leesser than currentValue
                        if (parentNode.value < currentNode.value) {
                            parentNode.right = currentNode.right
                            return currentNode
                        }
                        // parent node is greater than currentvalue
                        else {
                            parentNode.left = currentNode.right
                            return currentNode
                        }
                    }    
                // Case 4 has both children
                else {
                    const minRight  = currentNode.right
                    while(minRight.left) {
                        minRight = minRight.left
                    }
                    const temp = minRight.value
                    this.remove(minRight.value)
                    currentNode.value = temp
                }
                return true
            } else if (value < currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.left
            } else {
                parentNode = currentNode
                currentNode = currentNode.right
            }
        }
    }

    dfsPreOrderSearch(node, target) {
        if (!this.root) return false
        if (node.value === target) return true
        return this.dfsPreOrderSearch(node.left, target) || this.dfsPreOrderSearch(node.right, target)
    }

    depthFirstSearchPreOrder(node, list) {
        if (!node) return
        list.push(node.value)
        this.depthFirstSearchPreOrder(node.left, list) 
        this.depthFirstSearchPreOrder(node.right, list)
        return list
    }

    depthFirstSearchInOrder(node, list) {
        if (!node) return
        this.depthFirstSearchInOrder(node.left, list)
        list.push(node.value) 
        this.depthFirstSearchInOrder(node.right, list)
        return list
    }

    depthFirstSearchPostOrder(node, list) {
        if (!node) return
        this.depthFirstSearchPostOrder(node.left, list) 
        this.depthFirstSearchPostOrder(node.right, list)
        list.push(node.value)
        return list
    }

    breadthFirstSearch() {
        if (!this.root) return
        let currentNode = this.root
        let queue = []
        queue.push(currentNode)
        let list = []
        while(queue.length > 0) {
            currentNode = queue.shift()
            list.push(currentNode.value)
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        } 
        return list
    }

    dfsInorder(node, target) {
        if (!node) return false;
      
        if (dfsInorder(node.left, target)) return true;
      
        if (node.value === target) return true;
      
        return dfsInorder(node.right, target);
    }
      
    dfsPreorder(node, target) {
        if (!node) return false;
      
        if (node.value === target) return true;
      
        if (dfsPreorder(node.left, target)) return true;
      
        return dfsPreorder(node.right, target);
    }
      
    dfsPostorder(node, target) {
        if (!node) return false;
      
        if (dfsPostorder(node.left, target)) return true;
      
        if (dfsPostorder(node.right, target)) return true;
      
        return node.value === target;
    }
      
    dfs(node, target) {
        return (
          this.dfsPreorder(node, target) ||
          this.dfsInorder(node, target) ||
          this.dfsPostorder(node, target)
        );
    }
    traverse(node) {
        const tree = { value: node.value }
        tree.left = node.left ? this.traverse(node.left) : null
        tree.right = node.right ? this.traverse(node.right) : null
        return tree
    }
}

const bst = new BinarySearchTree()
bst.insert(9)
bst.insert(4)
bst.insert(20)
bst.insert(6)
bst.insert(170)
bst.insert(15)
bst.insert(1)
console.log('Traverse a tree', JSON.stringify(bst.traverse(bst.root)))
console.log('Looking for 15: ', bst.find(15))
console.log('Delete 15: ', bst.remove(15))
console.log('Traverse a tree', JSON.stringify(bst.traverse(bst.root)))

console.log('Depth first search pre order', bst.depthFirstSearchPreOrder(bst.root, []))
console.log('Depth first search in order', bst.depthFirstSearchInOrder(bst.root, []))
console.log('Depth first search pre order', bst.depthFirstSearchPreOrder(bst.root, []))
console.log('Breath first search', bst.breadthFirstSearch())

console.log('DFS for a value: ', bst.dfs(bst.root, 9))

console.log('MaxDepth of a tree', bst.maxDepth(bst.root))


