/*

Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c. 

Example 1:

Input: c = 5
Output: true
Explanation: 1 * 1 + 2 * 2 = 5
Example 2:

Input: c = 3
Output: false
 

Constraints:

0 <= c <= 231 - 1

*/


/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let start = 0, end = Math.floor(Math.sqrt(c));

    while(start <= end){
        let value =  start * start + end * end;

        if(value === c) return true;

        if(value > c) end--;
        if(value < c) start++;
    }

    return false;
};
