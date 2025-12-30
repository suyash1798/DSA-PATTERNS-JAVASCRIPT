/*

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.


*/





/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let graph = {}, visited = new Array(numCourses).fill(0);

    for (let [a, b] of prerequisites) {
        if (!graph[a]) graph[a] = [];
        graph[a].push(b);
    }

    function dfs(course) {
        if (!graph[course] || visited[course]) return true;

        visited[course] = 1;

        for (let c of graph[course]) {
            if(visited[c] === 1 || !dfs(c)) return false;
        }

        visited[course] = 2;

        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if(visited[i] !== 2 && !dfs(i)) return false;
    }

    return true;
};



// Topological Sort - Kahn's Algorithm


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let graph = {};
    let indegree = new Array(numCourses).fill(0);

    for (let [a, b] of prerequisites) {
        if (!graph[b]) graph[b] = [];

        graph[b].push(a);
        indegree[a]++;
    }

    let queue = [], qi = 0, done = 0;

    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] !== 0) continue;

        queue.push(i);
    }

    while (qi < queue.length) {
        let node = queue[qi++];

        done++;

        for (let n of (graph[node] || [])) {
            indegree[n]--;

            if (indegree[n] === 0) {
                queue.push(n);
            }
        }
    }

    return done === numCourses;
};