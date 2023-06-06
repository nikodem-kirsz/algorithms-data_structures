 const maxProfit = (prices) => {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit
  
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
      right++;
    }
    return max_profit;
  };


/**
 * @param {number[]} nums
 * @return {number}
 */
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

var climbStairs = function(n, memo ={}) {
    if(n in memo) return memo[n]
    if (n === 0) return 1;
    if (n === 1) return 1;
  
    const left = climbStairs(n-1,memo);
    const right = climbStairs(n-2, memo);
    memo[n] = left + right;
  
    return memo[n];
  };

console.log(climbStairs(10))

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

var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let i = 0;
    for (let num of pushed) {
        stack.push(num); // we are pushing the number to the stack
        console.log(stack);
        while (stack.length > 0 && stack[stack.length - 1] === popped[i]) {
         // if the last element of the stack is equal to the popped element
        stack.pop(); // we are popping the element

        i++; // we are incrementing the index of the popped element
        }
    }
  return stack.length === 0; // if the stack is empty then we have a valid sequence
};

const validateStackSequences = function(pushed, popped) {
    const stack = []
    let i = 0

    for (const el of pushed) {
        stack.push(el)
        while (stack.length && stack[stack.length - 1] === popped[i]) {
            stack.pop()
            i++
        }
    }
    
    return pushed.length === i
}
console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1]))