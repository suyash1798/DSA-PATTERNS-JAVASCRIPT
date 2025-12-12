/*

Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

 

Example 1:


Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4
Example 2:


Input: matrix = [["0","1"],["1","0"]]
Output: 1
Example 3:

Input: matrix = [["0"]]
Output: 0
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] is '0' or '1'.


*/



/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let m = matrix.length, n = matrix[0].length;
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(-1));

    function dfs(row, col) {
        if (row < 0 || col < 0 || row >= m || col >= n) return 0;

        if(matrix[row][col] === '0') return 0;

        if(dp[row][col] !== -1) return dp[row][col];

        let right = dfs(row, col + 1);
        let down = dfs(row + 1, col);
        let daig = dfs(row + 1, col + 1);

        return dp[row][col] = 1 + Math.min(right, down, daig);
    }

    let max = 0;

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j] === '0') continue;

            let size = dfs(i, j);
            max = Math.max(max, size);
        }
    }

    return max*max;
};