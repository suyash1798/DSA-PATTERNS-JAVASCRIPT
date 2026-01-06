/*

You are given a string s of length n containing only four kinds of characters: 'Q', 'W', 'E', and 'R'.

A string is said to be balanced if each of its characters appears n / 4 times where n is the length of the string.

Return the minimum length of the substring that can be replaced with any other string of the same length to make s balanced. If s is already balanced, return 0.

 

Example 1:

Input: s = "QWER"
Output: 0
Explanation: s is already balanced.
Example 2:

Input: s = "QQWE"
Output: 1
Explanation: We need to replace a 'Q' to 'R', so that "RQWE" (or "QRWE") is balanced.
Example 3:

Input: s = "QQQW"
Output: 2
Explanation: We can replace the first "QQ" to "ER". 
 

Constraints:

n == s.length
4 <= n <= 105
n is a multiple of 4.
s contains only 'Q', 'W', 'E', and 'R'.

*/



/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
    let n = s.length, eachCount = s.length / 4;
    let frq = {};
    let min = s.length;

    for (let ch of s) {
        frq[ch] = (frq[ch] || 0) + 1;
    }

    let start = 0;

    if (isValid()) return 0;

    function isValid() {
        let valid = true;
        for (let key in frq) {
            if (frq[key] > eachCount) {
                valid = false;
                break;
            }
        }
        return valid;
    }

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        frq[ch]--;

        while (isValid()) {
            min = Math.min(min, i - start + 1);
            frq[s[start]]++;
            start++;
        }
    }

    return min;
};