/*

You are given a 0-indexed array nums consisting of positive integers.

There are two types of operations that you can apply on the array any number of times:

Choose two elements with equal values and delete them from the array.
Choose three elements with equal values and delete them from the array.
Return the minimum number of operations required to make the array empty, or -1 if it is not possible.

 

Example 1:

Input: nums = [2,3,3,2,2,4,2,3,4]
Output: 4
Explanation: We can apply the following operations to make the array empty:
- Apply the first operation on the elements at indices 0 and 3. The resulting array is nums = [3,3,2,4,2,3,4].
- Apply the first operation on the elements at indices 2 and 4. The resulting array is nums = [3,3,4,3,4].
- Apply the second operation on the elements at indices 0, 1, and 3. The resulting array is nums = [4,4].
- Apply the first operation on the elements at indices 0 and 1. The resulting array is nums = [].
It can be shown that we cannot make the array empty in less than 4 operations.
Example 2:

Input: nums = [2,1,2,2,3,3]
Output: -1
Explanation: It is impossible to empty the array.
 

Constraints:

2 <= nums.length <= 105
1 <= nums[i] <= 106

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    const freq = new Map();
    for (const num of nums) freq.set(num, (freq.get(num) || 0) + 1);

    let rounds = 0;
    for (const f of freq.values()) {
        if (f === 1) return -1;
        rounds += Math.floor(f / 3);
        if (f % 3 !== 0) rounds += 1;
    }
    return rounds;
};