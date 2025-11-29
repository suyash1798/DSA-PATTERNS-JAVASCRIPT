/*

Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

answer[i] % answer[j] == 0, or
answer[j] % answer[i] == 0
If there are multiple solutions, return any of them.

 

Example 1:

Input: nums = [1,2,3]
Output: [1,2]
Explanation: [1,3] is also accepted.
Example 2:

Input: nums = [1,2,4,8]
Output: [1,2,4,8]
 

Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 2 * 109
All the integers in nums are unique.


*/




/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    nums.sort((a, b) => a - b);

    let n = nums.length, dp = new Array(n).fill(1);
    let child = new Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] % nums[j] === 0) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    child[i] = j;
                }
            }
        }
    }

    let maxIndex = 0;

    for (let i = 0; i < n; i++) {
        if(dp[maxIndex] < dp[i]){
            maxIndex = i;
        }
    }

    let parent = maxIndex, subset = [];

    while(parent !== -1){
        subset.push(nums[parent]);
        parent = child[parent];
    }

    return subset;
};