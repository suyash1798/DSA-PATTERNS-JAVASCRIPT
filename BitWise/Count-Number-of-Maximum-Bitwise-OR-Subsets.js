/*
Given an integer array nums, find the maximum possible bitwise OR of a subset of nums and return the number of different non-empty subsets with the maximum bitwise OR.

An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b. Two subsets are considered different if the indices of the elements chosen are different.

The bitwise OR of an array a is equal to a[0] OR a[1] OR ... OR a[a.length - 1] (0-indexed).

Example 1:

Input: nums = [3,1]
Output: 2
Explanation: The maximum possible bitwise OR of a subset is 3. There are 2 subsets with a bitwise OR of 3:
- [3]
- [3,1]

*/

var countMaxOrSubsets = function(nums) {
    let max = nums.reduce((total,n) => total | n, 0);

    return dfs(nums, 0, 0, max);
};

var dfs = function(nums, index, bitwise, max){
    if(index === nums.length){
        return 0;
    }

    let count  = (bitwise | nums[index]) === max ? 1: 0;

    count += dfs(nums, index+1, bitwise | nums[index], max);
    count += dfs(nums, index+1, bitwise, max);

    return count;
}