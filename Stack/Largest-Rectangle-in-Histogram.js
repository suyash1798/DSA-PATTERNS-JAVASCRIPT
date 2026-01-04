/*

Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

 

Example 1:


Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
Example 2:


Input: heights = [2,4]
Output: 4
 

Constraints:

1 <= heights.length <= 105
0 <= heights[i] <= 104

*/



/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let stack = [], max = 0;

    for (let i = 0; i <= heights.length; i++) {
        let height = i === heights.length ? 0 : heights[i];

        while (stack.length && heights[stack[stack.length - 1]] > height) {
            let index = stack.pop();
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;

            max = Math.max(max, heights[index] * width);
        }

        stack.push(i);
    }

    return max;
};