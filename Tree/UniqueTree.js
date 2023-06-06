class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  var generateTrees = function(n) {
    if (n === 0) {
        return []
    }
    return generateTreesHelper(1, n)
  }

  var generateTreesHelper = function(start, end) {
      let result = []
      if (start > end) {
          result.push(null)
          return result
      }
      for(let i=start; i<=end; i++) { //
          console.log(`LEFT: generateTreesHelper(${start},${i-1})`)
          const leftTrees = generateTreesHelper(start,i-1) //[TreeNode(2,null, null)]
          console.log(`RIGHT: generateTreesHelper(${i+1},${end})`)
          const rightTrees = generateTreesHelper(i+1, end) // [TreeNode(3, null, null)]
          for(let leftTree of leftTrees) {
              for(let rightTree of rightTrees) {
                  let root = new TreeNode(i)
                  root.left = leftTree
                  root.right = rightTree
                  console.log(`pushing ${JSON.stringify(root)}`)
                  result.push(root) // root = new TreeNode(1, null, new TreeNode(2, null, null) )  -> [1,null, 2]
              }
          }
      }
      return result
  }

  var numTrees = function(n) {
    let cache = {}
    function countUniqueTrees(n) {
      let totalTrees = 0
        if (n == 1 || n == 0) {
          cache[n] = 1
          return cache[n]
        }  else if (cache[n]) {
          return cache[n]
        } else {
          for(let i=1; i<=n; i++) {
            totalTrees += countUniqueTrees(i-1) * countUniqueTrees(n-i) // n = 3  -> 1 * countUniqueTrees(2) -> 1 * 1 * 1
            console.log(totalTrees)
          }
        }
        cache[n] = totalTrees
        return totalTrees
      }
  
      return countUniqueTrees(n)
  }

// console.log(numTrees(3))