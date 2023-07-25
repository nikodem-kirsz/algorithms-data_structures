package main

import (
	"fmt"
	"math"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func maxPathSum(root *TreeNode) int {
	maxSum := math.MinInt32
	findMaxPath(root, &maxSum)
	return maxSum
}

func findMaxPath(node *TreeNode, maxSum *int) int {
	if node == nil {
		return 0
	}

	leftSum := max(findMaxPath(node.Left, maxSum), 0)
	rightSum := max(findMaxPath(node.Right, maxSum), 0)

	currentSum := node.Val + leftSum + rightSum
	*maxSum = max(*maxSum, currentSum)

	return node.Val + max(leftSum, rightSum)
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	// Example binary tree
	root := &TreeNode{Val: 10}
	root.Left = &TreeNode{Val: 2}
	root.Right = &TreeNode{Val: 10}
	root.Left.Left = &TreeNode{Val: 20}
	root.Left.Right = &TreeNode{Val: 1}
	root.Right.Right = &TreeNode{Val: -25}
	root.Right.Right.Left = &TreeNode{Val: 3}
	root.Right.Right.Right = &TreeNode{Val: 4}

	result := maxPathSum(root)
	fmt.Println(result) // Output: 42 (The maximum path sum is obtained by the path: 20 -> 2 -> 10 -> 10)
}
