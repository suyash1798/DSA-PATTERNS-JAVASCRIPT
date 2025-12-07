/*

Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100


*/




/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let startRow = 0, startCol = 0, endRow = matrix.length-1, endCol = matrix[0].length-1;
    let output = [];

    while (startRow <= endRow && startCol <= endCol) {

        for (let i = startCol; i <= endCol; i++) {
            output.push(matrix[startRow][i]);
        }
        startRow++;

        for(let i = startRow; i<=endRow; i++){
            output.push(matrix[i][endCol]);
        }
        endCol--;

        if(startRow <= endRow){
            for (let i = endCol; i >= startCol; i--) {
                output.push(matrix[endRow][i]);
            }
            endRow--;
        }

        if(startCol <= endCol){
            for (let i = endRow; i >= startRow; i--) {
                output.push(matrix[i][startCol]);
            }
            startCol++;
        }
    }

    return output;
};