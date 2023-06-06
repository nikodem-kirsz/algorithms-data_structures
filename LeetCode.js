function towerBreakers(n, m) {
  // Write your code here
  if (m==1) {
      return 2
  }
  return n % 2 == 1 ? 1 : 2

}

console.log('Tower Breakers', towerBreakers(2,6))

var rotate = function(nums, k) {
  k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
  // 3 -> 3 % 7 = 0
  // 10 -> 10 % 7 = 3 
  let reverse = function(i, j){
   while(i < j){
       let temp = nums[i]
       nums[i] = nums[j]
       nums[j] = temp
       i++
       j--
   }
  } // suppose  ----->---> 

  reverse(0, nums.length-1); // reverse   <--<------
  reverse(0, k-1) // reverse first part ---><----
  reverse(k, nums.length-1)// reverse second part --->----->
};

console.log('Rotate Array', console.log(rotate([1,2,3,4,5,6,7], 3)))

var minIncrementForUnique = function(nums) {
  if(!nums || nums.length < 2) { // arrays with 0 or 1 numbers are already unique
      return 0;
  }
  let seen = {}
  let countSteps = 0
  for (let i=0; i<nums.length; i++) {
      while(seen[nums[i]]) {
          nums[i]++
          countSteps++
      }
      seen[nums[i]] = true
  }
  return countSteps
};

console.log('MinIncrementforUnique', minIncrementForUnique([1,2,2]))

 // [1,2,3,1,5,6]
 // [30,50,10,5,100]
 var rob = function(nums) {
  let dp = new Array(nums.length + 2).fill(0)
  for (let i=2; i<dp.length; i++) {
      const robCurrent = nums[i-2] + dp[i-2]
      const skipCurrent = dp[i-1]
      dp[i] = Math.max(robCurrent, skipCurrent)
  }
  return dp[dp.length - 1]
};

console.log(rob([30,50,10,5,100]))

var levelOrder = function(root) { 
  let stack = [[root]]
  let result = [[root]]

  while(levelNodes || stack) {
      let levelNodes = stack.pop()
      let i = 0
      while(i < levelNodes.length) {
          result.push(levelNodes[i].val)
          stack.push(levelNodes[i].children)
          i++
      }
  }

  return result
};

console.log(levelOrder())

