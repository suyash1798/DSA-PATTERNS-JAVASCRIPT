/*

845. Longest Mountain in Array
Solved
Medium
Topics
premium lock icon
Companies
You may recall that an array arr is a mountain array if and only if:

arr.length >= 3
There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given an integer array arr, return the length of the longest subarray, which is a mountain. Return 0 if there is no mountain subarray.

 

Example 1:

Input: arr = [2,1,4,7,3,2,5]
Output: 5
Explanation: The largest mountain is [1,4,7,3,2] which has length 5.
Example 2:

Input: arr = [2,2,2]
Output: 0
Explanation: There is no mountain.
 

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 104


*/


/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
    let n = arr.length, prefix = new Array(n).fill(0), suffix = new Array(n).fill(0);

    for (let i = 1; i < n - 1; i++) {
        if (arr[i] > arr[i - 1]) {
            prefix[i] = prefix[i - 1] + 1;
        }
    }

    for (let i = n - 2; i > 0; i--) {
        if (arr[i] > arr[i + 1]) {
            suffix[i] = suffix[i + 1] + 1;
        }
    }

    let max = 0;

    for (let i = 0; i < n; i++) {
        if(!prefix[i] || !suffix[i]) continue;
        max = Math.max(max, prefix[i] + suffix[i]);
    }

    return max ? max + 1 : 0;
};