/*

Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

Return any possible rearrangement of s or return "" if not possible.

 

Example 1:

Input: s = "aab"
Output: "aba"
Example 2:

Input: s = "aaab"
Output: ""
 

Constraints:

1 <= s.length <= 500
s consists of lowercase English letters.


*/




/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    let freq = {}, heap = new MaxPriorityQueue((a) => a[1]);

    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let key in freq) {
        heap.push([key, freq[key]]);
    }

    let str = '';

    while (str.length < s.length) {
        let ch1 = heap.pop();
        let ch2 = heap.pop();
        
        if(str[str.length-1] === ch1[0] && ch2){
            str += ch2[0];
            ch2[1]--;
        }else if(str[str.length-1] !== ch1[0]){
            str += ch1[0];
            ch1[1]--;
        }else{
            return "";
        }

        if(ch1 && ch1[1] !== 0) heap.push(ch1);
        if(ch2 && ch2[1] !== 0) heap.push(ch2);
    }

    return str;
};