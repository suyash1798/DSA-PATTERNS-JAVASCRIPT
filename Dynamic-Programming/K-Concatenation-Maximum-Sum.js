/*

Given an integer array arr and an integer k, modify the array by repeating it k times.

For example, if arr = [1, 2] and k = 3 then the modified array will be [1, 2, 1, 2, 1, 2].

Return the maximum sub-array sum in the modified array. Note that the length of the sub-array can be 0 and its sum in that case is 0.

As the answer can be very large, return the answer modulo 109 + 7.

 

Example 1:

Input: arr = [1,2], k = 3
Output: 9
Example 2:

Input: arr = [1,-2,1], k = 5
Output: 2
Example 3:

Input: arr = [-1,-2], k = 7
Output: 0
 

Constraints:

1 <= arr.length <= 105
1 <= k <= 105
-104 <= arr[i] <= 104


*/


/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function (arr, k) {
    let max = 0, total = 0, sum = 0;
    let mod = Math.pow(10, 9) + 7;

    for (let num of arr) {
        total += num;
        sum = Math.max(num, sum + num);
        max = Math.max(max, sum);
    }

    if (k === 1) return max;

    for (let num of arr) {
        sum = Math.max(num, sum + num);
        max = Math.max(max, sum);
    }

    if (total <= 0) return max;

    return (max + (total * (k - 2))) % mod;
};