/*

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
 

Example 1:


Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 200


*/


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length, n = grid[0].length;
    let memo = new Array(m).fill(0).map(() => new Array(n).fill(Infinity))

    var dfs = function (row, col) {
        if (row >= m || col >= n) {
            return Infinity;
        }

        if (row === m - 1 && col === n - 1) {
            return grid[row][col];
        }

        if(memo[row][col] !== Infinity){
            return memo[row][col];
        }

        let right = dfs(row, col + 1);
        let down = dfs(row + 1, col);

        return memo[row][col] = grid[row][col] + Math.min(right, down);
    }

    return dfs(0,0)
};