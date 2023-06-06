var search = function(nums, target) {
    function binarySearch(nums, target, left = 0, right = nums.length - 1) {
        if (left > right) {
          return -1;
        }
      
        const mid = Math.floor((left + right) / 2);
      
        if (nums[mid] === target) {
          return mid;
        } else if (nums[mid] < target) {
          return binarySearch(nums, target, mid + 1, right);
        } else {
          return binarySearch(nums, target, left, mid - 1);
        }
      }
      return binarySearch(nums, target)
};

console.log('Binary Search', search([-1,0,3,5,9,12], 9))