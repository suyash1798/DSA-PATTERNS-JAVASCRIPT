/*

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 3:

Input: nums = [1,2,3]
Output: 3
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 1000


*/




/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length <= 2) return Math.max(...nums);

    let n = nums.length, dp = new Array(2).fill(0).map(() => new Array(n).fill(0));

    dp[0][0] = nums[0];
    dp[0][1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n - 1; i++) {
        dp[0][i] = Math.max(nums[i] + dp[0][i - 2], dp[0][i - 1]);
    }

    dp[1][1] = nums[1];
    dp[1][2] = Math.max(nums[1], nums[2]);

    for (let i = 3; i < n; i++) {
        dp[1][i] = Math.max(nums[i] + dp[1][i - 2], dp[1][i - 1]);
    }

    return Math.max(dp[0][n-2], dp[1][n-1]);
};


/**.    Top-Down approach  */



/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length <= 2) return Math.max(...nums);

    let n = nums.length;
    let dp = new Array(2).fill(0).map(() => new Array(n).fill(-1));

    function dfs(n, min) {
        if (n === min) return nums[n];

        if (n < min) return 0;

        if (dp[min][n] !== -1) return dp[min][n];

        return dp[min][n] = Math.max(nums[n] + dfs(n - 2, min), dfs(n - 1, min));
    }

    return Math.max(dfs(n - 1, 1), dfs(n - 2, 0));
};