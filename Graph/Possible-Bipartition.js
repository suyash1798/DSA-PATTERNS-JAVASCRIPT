/*

We want to split a group of n people (labeled from 1 to n) into two groups of any size. Each person may dislike some other people, and they should not go into the same group.

Given the integer n and the array dislikes where dislikes[i] = [ai, bi] indicates that the person labeled ai does not like the person labeled bi, return true if it is possible to split everyone into two groups in this way.

 

Example 1:

Input: n = 4, dislikes = [[1,2],[1,3],[2,4]]
Output: true
Explanation: The first group has [1,4], and the second group has [2,3].
Example 2:

Input: n = 3, dislikes = [[1,2],[1,3],[2,3]]
Output: false
Explanation: We need at least 3 groups to divide them. We cannot put them in two groups.
 

Constraints:

1 <= n <= 2000
0 <= dislikes.length <= 104
dislikes[i].length == 2
1 <= ai < bi <= n
All the pairs of dislikes are unique.



*/




/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
    let graph = new Array(n+1).fill(0).map(() => new Array()); 
    let parents = new Array(n + 1).fill(0).map((_, index) => index);
    let ranks = new Array(n + 1).fill(0);

    for (let [a, b] of dislikes) {
        graph[a].push(b);
        graph[b].push(a);
    }

    function findParent(n) {
        if (n !== parents[n]) {
            parents[n] = findParent(parents[n]);
        }

        return parents[n];
    }

    function union(a, b) {
        let pa = findParent(a);
        let pb = findParent(b);

        if (ranks[pa] > ranks[pb]) {
            parents[pb] = pa;
        } else if (ranks[pa] < ranks[pb]) {
            parents[pa] = pb;
        } else {
            parents[pa] = pb;
            ranks[pb]++;
        }
    }

    for (let i = 1; i <= n; i++) {
        for(let enemy of graph[i]){
            if(findParent(i) === findParent(enemy)) return false;

            union(graph[i][0], enemy);
        }
    }

    return true;
};