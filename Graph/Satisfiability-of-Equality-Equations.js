/*

You are given an array of strings equations that represent relationships between variables where each string equations[i] is of length 4 and takes one of two different forms: "xi==yi" or "xi!=yi".Here, xi and yi are lowercase letters (not necessarily different) that represent one-letter variable names.

Return true if it is possible to assign integers to variable names so as to satisfy all the given equations, or false otherwise.

 

Example 1:

Input: equations = ["a==b","b!=a"]
Output: false
Explanation: If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.
There is no way to assign the variables to satisfy both equations.
Example 2:

Input: equations = ["b==a","a==b"]
Output: true
Explanation: We could assign a = 1 and b = 1 to satisfy both equations.
 

Constraints:

1 <= equations.length <= 500
equations[i].length == 4
equations[i][0] is a lowercase letter.
equations[i][1] is either '=' or '!'.
equations[i][2] is '='.
equations[i][3] is a lowercase letter.


*/




/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
    let parents = {}, ranks = {};

    function findParent(a) {
        if (a !== parents[a]) {
            parents[a] = findParent(parents[a]);
        }
        return parents[a];
    }

    function union(a, b) {
        let parenta = findParent(a);
        let parentb = findParent(b);

        ranks[parenta] = ranks[parenta] || 0;
        ranks[parentb] = ranks[parentb] || 0;

        if(ranks[parenta] > ranks[parentb]){
            parents[b] = a;
        }else if(ranks[parenta] < ranks[parentb]){
            parents[parenta] = parentb;
        }else{
            ranks[parentb]++;
            parents[parenta] = parentb;
        }
    }

    for(let eq of equations){
        let [a, s1, s2, b] = eq.split('');

        if(!parents[a]) parents[a] = a;
        if(!parents[b]) parents[b] = b;

        if(s1 === '!') continue;

        union(a,b);
    }

    for(let eq of equations){
        let [a, s1, s2, b] = eq.split('');

        if(s1 !== '!') continue;

        if(findParent(a) === findParent(b)) return false;
    }

    return true;
};