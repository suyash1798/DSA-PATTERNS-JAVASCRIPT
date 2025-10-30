/*

You are given a positive integer n.

A binary string x is valid if all substrings of x of length 2 contain at least one "1".

Return all valid strings with length n, in any order.

Example 1:

Input: n = 3

Output: ["010","011","101","110","111"]

Explanation:

The valid strings of length 3 are: "010", "011", "101", "110", and "111".

*/

/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    let results = [];
    generateValidString(n, 0, '', results);
    return results;
};

var generateValidString = function (n, index, str, combs){
    if(index === n){
        combs.push(str);
        return;
    }

    if(index === 0 || str[index-1] !== '0'){
        generateValidString(n, index+1, str+'0', combs);
    }

    generateValidString(n, index+1, str+'1', combs);
}