class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }
}

//     9
//  4     20
//1  6  15  170

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
        } else {
           let currentNode = this.root
           while (true) { // O(logn) Divide & Conquer
            if (value < currentNode.value) {
                if (currentNode.left) {
                    currentNode = currentNode.left
                } else {
                    currentNode.left = newNode
                    return this;
                }
                
            } else if (value > currentNode.value) {
                if (currentNode.right) {
                    currentNode = currentNode.right
                } else {
                    currentNode.right = newNode
                    return this;
                }
            }
           }
        }
    }
    lookup(value) {
        if (!this.root) {
            return false
        }
        let currentNode = this.root
        while(currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            } else if (value === currentNode.value) {
                return currentNode
            }
        }
    }

//     9
//  4     20
//1  6  15  170

//     9
//  1     20
//   6  15  170

//     9
//  4     20
//1  6  15  170

//     9
//  4     170
// 1  6  15  
remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!
        
        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            
            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {
            
            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root
    let list = []
    let queue = []
    queue.push(currentNode)
    while(queue.length > 0) {
      currentNode = queue.shift()
      list.push(currentNode.value)
      if (currentNode.left) {
        if (currentNode.left.value > currentNode.value) {
          return false
        }
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        if (currentNode.right.value < currentNode.value) {
          return false
        }
        queue.push(currentNode.right)
      }
    }
    return list
  }

  BreadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }
    const currentNode = queue.shift();
    list.push(currentNode.value);
    
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    
    return this.BreadthFirstSearchR(queue, list);
  }

  DFSInorder() {
    return this.traverseInOrder(this.root, [])
  }

  DFSPostorder() {
    return this.traversePostOrder(this.root, [])
  }
 
  DFSPreorder() {
    return this.traversePreorder(this.root, [])
  }

  traverseInOrder(node, list) {
    console.log(node.value)
    if (node.left) {
      this.traverseInOrder(node.left, list)
    }
    list.push(node.value)
    if (node.right) {
      this.traverseInOrder(node.right, list)
    }
    return list
  }

  traversePreOrder(node, list) {
    console.log(node.value)
    list.push(node.value)
    if (node.left) {
      this.traversePreOrder(node.left, list)
    }
    if (node.right) {
      this.traversePreOrder(node.right, list)
    }
    return list
  }

  traversePostOrder(node, list) {
    console.log(node.value)
    if (node.left) {
      this.traversePostOrder(node.left, list)
    }
    if (node.right) {
      this.traversePostOrder(node.right, list)
    }
    list.push(node.value)
    return list
  }

   // [2,1,3,4,5]
  isValidBST(root) {
    let currentNode = root
    let list = []
    let queue = []
    list.push(currentNode.val)
    while (queue.length > 0) {
        queue.shift()
        if (currentNode.left) {
          if (currentNode.left.val > currentNode.val) {
              return false
          }
          queue.push(currentNode.left)
        }
        if (currentNode.right) {
            if (currentNode.right.val < currentNode.val) {
              console.log('inside if')
              return false
            }
          queue.push(currentNode.right)
        }
  }
  return true
};
}
//     9
//  4     20
//1  6  15  170


const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// console.log(JSON.stringify(traverse(tree.root)))
// console.log(tree.lookup(49))
// console.log(tree.breadthFirstSearch())
console.log(tree.DFSInorder())

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }