class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
/*
Create a function called maxSumPath that takes in a binary tree as an argument and returns the maximum sum of a path from the root node to a leaf node. 
The sum of a path is the sum of the values of all the nodes along that path.
*/
function maxPathSum(root) {
    let maxSum = Number.MIN_SAFE_INTEGER
    
    function dfs(node) {
        if(!node) return 0 // base case

        const leftSum = Math.max(dfs(node.left, 0))
        const rightSum = Math.max(dfs(node.right, 0)) // where resursion starts and start executing after base case is met

        const pathSum = node.val + leftSum + rightSum
        maxSum = Math.max(pathSum, maxSum)

        return node.val + Math.max(leftSum, rightSum)
    }

    dfs(root)

    return maxSum
}

function isBST(root) {
    return isBSTHelper(root, -Infinity, Infinity)
}

function isBSTHelper(node, minValue, maxValue) {
    if (node === null) {
        return true
    }

    if (node.value < minValue || node.value > maxValue) {
        return false
    }

    return isBSTHelper(node.left, minValue, node.value) && isBSTHelper(node.right, node.value, maxValue)

}

function floorCeil(root, target) {

    let floor = Number.MIN_SAFE_INTEGER
    let ceil = Number.MAX_SAFE_INTEGER

    function dfs(node, target) {
        if (!node) return 

        if (node.val < target) {
            floor = Math.max(node.val, floor)
        }

        if (node.val > target) {
            ceil = Math.min(node.val, ceil)
        }

        if (node.val === target) {
            floor = ceil = node.val
        }   

        dfs(node.left, target) || dfs(node.right, target)

        return 
    }

    dfs(root, target)

    return [floor, ceil]
}

/*
Create a function called maxDepth that takes in a binary tree as an argument and returns the maximum depth of the tree.  
The depth of a tree is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/
function maxDepth(node) {
    if (!node) return 0

    const leftDepth = maxDepth(node.left)
    const rightDepth = maxDepth(node.right)

    return Math.max(leftDepth, rightDepth) + 1
}
//       1
//     2   10
//  4   5    6
const root = new Node(
    1,
    new Node(2, new Node(4), new Node(5)),
    new Node(10, null, new Node(6))
  );
    
console.log('maxPathSum', maxPathSum(root)); // Output: 15

console.log('floorCeil', floorCeil(root, 3)); // Output: [2,4]

console.log('isBST', isBST(root)); // Output: [2,4]

console.log('maxDepth', maxDepth(root))


function mergeBinaryTree(root1, root2) {

}

console.log('mergeBinaryTree', mergeBinaryTree(root1, root2))