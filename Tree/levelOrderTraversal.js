/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderResursive = function(root) {
    let levels = []

    function traverse(node, level) {
        if (node === null) {
            return
        }

        if(levels.length === level) levels.push([]) // for instance 5 length and level 5  means it has 

        levels[level].push(node.val)

        traverse(node.left, level+1)
        traverse(node.right, level+1)
    }

    traverse(root, 0)

    return levels
}


var levelOrder = function(root) {
    if (!root) {
        return []
    }
    let result = []
    let queue = [root]

    while(queue.length) {
        let level = []
        let levelSize = queue.length
        for(let i = 0; i < levelSize; i++) {
            let current = queue.shift()
            level.push(current.val)
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
        result.push(level)
    }

    return result
}