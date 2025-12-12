/*

Given a string s, find the longest palindromic subsequence's length in s.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

 

Example 1:

Input: s = "bbbab"
Output: 4
Explanation: One possible longest palindromic subsequence is "bbbb".
Example 2:

Input: s = "cbbd"
Output: 2
Explanation: One possible longest palindromic subsequence is "bb".
 

Constraints:

1 <= s.length <= 1000
s consists only of lowercase English letters.


*/




/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(-1));

    function dfs(i, j) {
        if (i < 0 || j >= s.length) return 0;

        if(dp[i][j] !== -1) return dp[i][j];

        let count = 0;

        if (s[i] === s[j]) {
            count += i === j ? 1 : 2;
            count += dfs(i - 1, j + 1);
        } else {
            count += Math.max(dfs(i - 1, j), dfs(i, j + 1));
        }

        return dp[i][j] = count;
    }

    let max = 0;

    for (let i = 0; i < s.length; i++) {
        max = Math.max(max, dfs(i, i), dfs(i, i + 1));
    }

    return max;
};