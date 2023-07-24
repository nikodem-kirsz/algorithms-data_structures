class TreeNode {
    constructor(val) {
        this.val = val
        this.left = this.right = null
    }
}

function memoizedMaxPathSum(root) {
    let maxSum = Number.MIN_SAFE_INTEGER

    function dfs(node) {
        if (!node) return 0

        const leftSum = Math.max(dfs(node.left), 0)
        const rightSum = Math.max(dfs(node.right), 0)

        const currentSum = node.val + leftSum + rightSum

        maxSum = Math.max(maxSum, currentSum)

        return node.val + Math.max(leftSum, rightSum)
    }

    dfs(root)
    return maxSum
}

function nonMemoizedMathPathSum(root) {
    let maxSum = Number.MIN_SAFE_INTEGER;
  
    function findMaxPath(node) {
      if (!node) return 0;
  
      const leftSum = findMaxPath(node.left);
      const rightSum = findMaxPath(node.right);
  
      const currentSum = Math.max(node.val, node.val + leftSum, node.val + rightSum);
  
      maxSum = Math.max(maxSum, currentSum, node.val + leftSum + rightSum);
  
      return Math.max(node.val, node.val + leftSum, node.val + rightSum);
    }
  
    findMaxPath(root);
    return maxSum;
  }
  
const root = new TreeNode(10)
root.left = new TreeNode(2)
root.right = new TreeNode(10)
root.left.left = new TreeNode(20)
root.left.right = new TreeNode(1)
root.right.right = new TreeNode(-25)
root.right.right.left = new TreeNode(3)
root.right.right.right = new TreeNode(4)


console.time('nonMemoizedMathPathSum')
console.log(nonMemoizedMathPathSum(root))
console.timeEnd("nonMemoizedMathPathSum")

console.time('memoizedMaxPathSum')
console.log(memoizedMaxPathSum(root))
console.timeEnd("memoizedMaxPathSum")

