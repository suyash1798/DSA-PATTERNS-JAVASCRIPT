/*

A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum.

Given a row x col grid of integers, how many 3 x 3 magic square subgrids are there?

Note: while a magic square can only contain numbers from 1 to 9, grid may contain numbers up to 15.

 

Example 1:


Input: grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]
Output: 1
Explanation: 
The following subgrid is a 3 x 3 magic square:

while this one is not:

In total, there is only one magic square inside the given grid.
Example 2:

Input: grid = [[8]]
Output: 0
 

Constraints:

row == grid.length
col == grid[i].length
1 <= row, col <= 10
0 <= grid[i][j] <= 15


*/



/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
    let row = grid.length, col = grid[0].length;
    let count = 0;
    let total = 0;

    for (let i = 1; i <= 9; i++) total += i;

    for (let i = 0; i < row - 2; i++) {
        for (let j = 0; j < col - 2; j++) {
            if (isValid(grid, i, j, total)) {
                count++;
            }
        }
    }

    return count;
};

var isValid = function (grid, row, col, total) {
    let rowSum = new Array(3).fill(0);
    let colSum = new Array(3).fill(0);

    let daigSum = 0;
    let antiDaigSum = 0;
    let uni = new Set();

    for (let i = row; i < row + 3; i++) {
        for (let j = col; j < col + 3; j++) {
            if(grid[i][j] < 1 || grid[i][j] > 9) return false;
            let rowIndex = i - row;
            let colIndex = j - col;

            rowSum[rowIndex] += grid[i][j];
            colSum[colIndex] += grid[i][j];

            uni.add(grid[i][j]);

            if (rowIndex === colIndex) daigSum += grid[i][j];
            if (rowIndex + colIndex + 1 === 3) antiDaigSum += grid[i][j];
        }
    }

    if(uni.size !== 9) return false;

    for (let sum of rowSum) {
        if(sum !== total/3) return false;
    }

    for (let sum of colSum) {
        if(sum !== total/3) return false;
    }

    return daigSum === total/3 && antiDaigSum === total/3;
}