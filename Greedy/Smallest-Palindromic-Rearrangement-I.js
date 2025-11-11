/*

You are given a palindromic string s.

Return the lexicographically smallest palindromic permutation of s.

 

Example 1:

Input: s = "z"

Output: "z"

Explanation:

A string of only one character is already the lexicographically smallest palindrome.

Example 2:

Input: s = "babab"

Output: "abbba"

Explanation:

Rearranging "babab" → "abbba" gives the smallest lexicographic palindrome.

Example 3:

Input: s = "daccad"

Output: "acddca"

Explanation:

Rearranging "daccad" → "acddca" gives the smallest lexicographic palindrome.

 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
s is guaranteed to be palindromic.


*/


/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function (s) {
    let freq = new Map(), p1 = '', p2 = '';

    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    let entries = [...freq.entries()];
    entries.sort((a, b) => b[0].charCodeAt(0) - a[0].charCodeAt(0));

    for (let entry of entries) {
        let [ch, value] = entry;

        if (value % 2 !== 0) {
            p2 = ch + p2;
            value -= 1;
        }

        p1 = ch.repeat(value / 2) + p1;
        p2 = p2 + ch.repeat(value / 2);
    }

    return p1 + p2;
};