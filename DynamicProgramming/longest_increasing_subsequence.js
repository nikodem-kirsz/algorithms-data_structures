/*

Problem: Longest Increasing Subsequence (LIS)
Given an unsorted array of integers, find the length of the longest increasing subsequence.

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const result = longestIncreasingSubsequence(nums);
console.log(result); // Output: 4 (The longest increasing subsequence is [2, 3, 7, 101])

*/

function longestIncreasingSubsequence(nums) {
    if (nums.length === 0) return 0

    const dp = new Array(nums.length).fill(1)

    for(let i = 1; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    return Math.max(...dp)
}

function longestIncreasingSubsequenceForArray(arr) {
    return arr.map(nums => longestIncreasingSubsequence(nums))
}

const inputArrays = [
    [10, 9, 2, 5, 3, 7, 101, 18],
    [3, 4, -1, 0, 6, 2, 3],
    [10, 22, 9, 33, 21, 50, 41, 60, 80]
]

const results = longestIncreasingSubsequenceForArray(inputArrays)
console.log(results)
