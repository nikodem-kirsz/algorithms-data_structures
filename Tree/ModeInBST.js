var findMode = function(root) {
    let modes = {}
    let level = 0
    let result = []
    
    function traverse(node, level) {
        if (node === null) {
            return
        }

        if (!result[level]) {
            result[level] = []
        }

        result[level].push(node.val)

        modes[node.val] = modes[node.val]++ || 1

        traverse(node.left, level+1)
        traverse(node.right, level+1)
    }

    traverse(root, level)
};
