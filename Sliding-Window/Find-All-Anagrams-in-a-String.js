/*

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 

Constraints:

1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters.

*/



/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let pf = new Map(), sf = new Map();

    for (let ch of p) {
        pf.set(ch, (pf.get(ch) || 0) + 1);
    }
    let start = 0, output = [];

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (!pf.has(ch)) {
            sf = new Map();
            start = i + 1;
            continue;
        }

        sf.set(ch, (sf.get(ch) || 0) + 1);

        while (sf.get(ch) > pf.get(ch)) {
            sf.set(s[start], sf.get(s[start]) - 1);
            start++;
        }

        if ((i - start + 1) === p.length) output.push(start);
    }

    return output;
};