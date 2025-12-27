/*

There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn]. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply at most maxMove moves to the ball.

Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo 109 + 7.

 

Example 1:


Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
Output: 6
Example 2:


Input: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
Output: 12
 

Constraints:

1 <= m, n <= 50
0 <= maxMove <= 50
0 <= startRow < m
0 <= startColumn < n


*/



/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
    let count = 0;
    let memo = new Array(m).fill(0).map(() => new Array(n).fill(0).map(() => new Array(maxMove + 1).fill(-1)));
    let mod = 1000000007;

    function dfs(i, j, move) {
        if (move > maxMove) return 0;

        if (i < 0 || j < 0 || i >= m || j >= n) {
            return 1;
        }

        if (memo[i][j][move] !== -1) return memo[i][j][move];

        let up = dfs(i + 1, j, move + 1);
        let down = dfs(i - 1, j, move + 1);
        let right = dfs(i, j + 1, move + 1);
        let left = dfs(i, j - 1, move + 1);

        let total = up + down + right + left;

        total = total % mod;

        return memo[i][j][move] = total;
    }

    return dfs(startRow, startColumn, 0);
};