/*

Given an integer array nums, partition it into two (contiguous) subarrays left and right so that:

Every element in left is less than or equal to every element in right.
left and right are non-empty.
left has the smallest possible size.
Return the length of left after such a partitioning.

Test cases are generated such that partitioning exists.

 

Example 1:

Input: nums = [5,0,3,8,6]
Output: 3
Explanation: left = [5,0,3], right = [8,6]
Example 2:

Input: nums = [1,1,1,0,6,12]
Output: 4
Explanation: left = [1,1,1,0], right = [6,12]
 

Constraints:

2 <= nums.length <= 105
0 <= nums[i] <= 106
There is at least one valid answer for the given input.


*/



/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function (nums) {
    let minSuffix = [];
    let max = 0, min = nums[nums.length - 1];

    for (let i = nums.length - 1; i >= 0; i--) {
        min = Math.min(min, nums[i]);

        minSuffix[i] = min;
    }

    let index = -1;

    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, nums[i]);

        if (max <= minSuffix[i + 1]) {
            index = i + 1;
            break;
        }
    }

    return index;
};