/*

You are given an integer n. There is an undirected graph with n vertices, numbered from 0 to n - 1. You are given a 2D integer array edges where edges[i] = [ai, bi] denotes that there exists an undirected edge connecting vertices ai and bi.

Return the number of complete connected components of the graph.

A connected component is a subgraph of a graph in which there exists a path between any two vertices, and no vertex of the subgraph shares an edge with a vertex outside of the subgraph.

A connected component is said to be complete if there exists an edge between every pair of its vertices.

 

Example 1:



Input: n = 6, edges = [[0,1],[0,2],[1,2],[3,4]]
Output: 3
Explanation: From the picture above, one can see that all of the components of this graph are complete.
Example 2:



Input: n = 6, edges = [[0,1],[0,2],[1,2],[3,4],[3,5]]
Output: 1
Explanation: The component containing vertices 0, 1, and 2 is complete since there is an edge between every pair of two vertices. On the other hand, the component containing vertices 3, 4, and 5 is not complete since there is no edge between vertices 4 and 5. Thus, the number of complete components in this graph is 1.
 

Constraints:

1 <= n <= 50
0 <= edges.length <= n * (n - 1) / 2
edges[i].length == 2
0 <= ai, bi <= n - 1
ai != bi
There are no repeated edges.


*/



/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
    let parents = new Array(n).fill(0).map((_, index) => index), ranks = new Array(n).fill(0);

    function findParent(x) {
        if (parents[x] !== x) {
            parents[x] = findParent(parents[x]);
        }

        return parents[x];
    }

    function union(a, b) {
        let p1 = findParent(a);
        let p2 = findParent(b);

        if (p1 === p2) return false;

        if (ranks[p1] < ranks[p2]) {
            parents[p1] = p2;
        } else if (ranks[p1] > ranks[p2]) {
            parents[p2] = p1;
        } else {
            parents[p1] = p2;
            ranks[p2]++;
        }

        return true;
    }

    for (let [a, b] of edges) {
        union(a, b);
    }

    let edgeCount = new Map();
    let nodeCount = new Map();
    let connected = 0;

    for(let i = 0; i<n;i++){
        let parent = findParent(i);

        nodeCount.set(parent, (nodeCount.get(parent) || 0) + 1);
    }

    for (let [a, b] of edges) {
        let parent = findParent(a);

        edgeCount.set(parent, (edgeCount.get(parent) || 0) + 1);
    }

    for(let [node, count] of nodeCount.entries()){
        let edge = edgeCount.get(node) || 0;

        if(edge >= count * (count-1)/2) connected++;
    }

    return connected;
};