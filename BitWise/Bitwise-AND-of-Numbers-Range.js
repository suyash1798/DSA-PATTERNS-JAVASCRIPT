/*
Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.

Example 1:

Input: left = 5, right = 7
Output: 4
 */

var rangeBitwiseAnd = function(left, right) {
    let count = 0;

    while(right !== left){
        right = right >> 1;
        left = left >> 1;
        count++;
    }

    return right << count;
};