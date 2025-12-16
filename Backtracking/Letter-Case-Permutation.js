/*

Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. Return the output in any order.

 

Example 1:

Input: s = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]
Example 2:

Input: s = "3z4"
Output: ["3z4","3Z4"]
 

Constraints:

1 <= s.length <= 12
s consists of lowercase English letters, uppercase English letters, and digits.


*/




/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    let combs = [];

    function backtracking(index, comb) {
        if (index === s.length) {
            combs.push(comb.join(''));
            return;
        }

        let ch = s[index].toLowerCase();

        if (/[a-z]/.test(ch)) {
            comb.push(ch.toUpperCase());
            backtracking(index + 1, comb);
            comb.pop();
        }

        comb.push(ch);
        backtracking(index + 1, comb);
        comb.pop();
    }

    backtracking(0, []);
    return combs;
};