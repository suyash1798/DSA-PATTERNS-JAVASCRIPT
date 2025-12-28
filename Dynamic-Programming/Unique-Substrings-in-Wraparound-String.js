/*

We define the string base to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz", so base will look like this:

"...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".
Given a string s, return the number of unique non-empty substrings of s are present in base.

 

Example 1:

Input: s = "a"
Output: 1
Explanation: Only the substring "a" of s is in base.
Example 2:

Input: s = "cac"
Output: 2
Explanation: There are two substrings ("a", "c") of s in base.
Example 3:

Input: s = "zab"
Output: 6
Explanation: There are six substrings ("z", "a", "b", "za", "ab", and "zab") of s in base.
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.

*/



/**
 * @param {string} s
 * @return {number}
 */
var findSubstringInWraproundString = function (s) {
    let start = 0, n = s.length;
    let dp = new Array(26).fill(0);

    for (let i = 0; i < n; i++) {
        let code = s[i].charCodeAt(0) - 97;

        if (i !== 0) {
            let lastCode = (s[i - 1].charCodeAt(0) - 97 + 1) % 26;

            if (lastCode !== code) start = i;
        }

        dp[code] = Math.max(dp[code], i - start + 1);
    }


    return dp.reduce((total, n) => total + n, 0);
};