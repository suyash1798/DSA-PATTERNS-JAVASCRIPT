/*

Given two strings s1 and s2, return the lowest ASCII sum of deleted characters to make two strings equal.

 

Example 1:

Input: s1 = "sea", s2 = "eat"
Output: 231
Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
Deleting "t" from "eat" adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
Example 2:

Input: s1 = "delete", s2 = "leet"
Output: 403
Explanation: Deleting "dee" from "delete" to turn the string into "let",
adds 100[d] + 101[e] + 101[e] to the sum.
Deleting "e" from "leet" adds 101[e] to the sum.
At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.
 

Constraints:

1 <= s1.length, s2.length <= 1000
s1 and s2 consist of lowercase English letters.

*/



/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
    let dp = new Array(s1.length + 1).fill(0).map(() => new Array(s2.length + 1).fill(-1));

    function getSum(start, end, str) {
        let sum = 0;
        for (let i = start; i <= end; i++) sum += str[i].charCodeAt(0);
        return sum;
    }

    function dfs(index1, index2) {
        if (dp[index1][index2] !== -1) return dp[index1][index2];

        if (index1 === s1.length) {
            return getSum(index2, s2.length - 1, s2);
        }

        if (index2 === s2.length) {
            return getSum(index1, s1.length - 1, s1);
        }

        if (s1[index1] === s2[index2]) return dp[index1][index2] = dfs(index1 + 1, index2 + 1);

        let d1 = s1[index1].charCodeAt(0) + dfs(index1 + 1, index2);
        let d2 = s2[index2].charCodeAt(0) + dfs(index1, index2 + 1);

        return dp[index1][index2] = Math.min(d1, d2);
    }

    return dfs(0, 0);
};


/// Tabulation

var minimumDeleteSum = function (s1, s2) {
    let l1 = s1.length, l2 = s2.length;
    let dp = new Array(s1.length + 1).fill(0).map(() => new Array(s2.length + 1).fill(-1));

    function getSum(start, end, str) {
        let sum = 0;
        for (let i = start; i <= end; i++) sum += str[i].charCodeAt(0);
        return sum;
    }

    for (let i = 0; i < l2 + 1; i++) {
        dp[l1][i] = getSum(i, l2 - 1, s2);
    }

    for (let i = 0; i < l1 + 1; i++) {
        dp[i][l2] = getSum(i, l1 - 1, s1);
    }

    for (let i = l1 - 1; i >= 0; i--) {
        for (let j = l2 - 1; j >= 0; j--) {
            if (s1[i] === s2[j]) {
                dp[i][j] = dp[i + 1][j + 1];
            } else {
                dp[i][j] = Math.min(s1[i].charCodeAt(0) + dp[i + 1][j], s2[j].charCodeAt(0) + dp[i][j + 1]);
            }
        }
    }

    return dp[0][0];
}
