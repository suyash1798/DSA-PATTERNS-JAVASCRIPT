/*

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?

*/


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let tu = 0, tf = new Map();

    for (let ch of t) {
        if (!tf.has(ch)) {
            tu++;
            tf.set(ch, 0);
        }
        tf.set(ch, tf.get(ch) + 1)
    }

    let start = 0, sc = 0, min, sf = new Map();

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (!tf.has(ch)) continue;

        if (!sf.has(ch)) {
            sf.set(ch, 0);
        }
        sf.set(ch, sf.get(ch) + 1);

        if (tf.get(ch) === sf.get(ch)) sc++;

        while (sc === tu) {
            if (tf.has(s[start]) && tf.get(s[start]) > (sf.get(s[start]) - 1)) break;

            sf.set(s[start], sf.get(s[start]) - 1);
            start++;
        }

        if (sc === tu && (!min || min.length > (i - start + 1))) {
            min = s.substring(start, i + 1);
        }
    }

    return min ? min : '';
};

