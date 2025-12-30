/*

Given the root of a binary tree, return the most frequent subtree sum. If there is a tie, return all the values with the highest frequency in any order.

The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).

 

Example 1:


Input: root = [5,2,-3]
Output: [2,-3,4]
Example 2:


Input: root = [5,2,-5]
Output: [2]
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-105 <= Node.val <= 105

*/




/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
    let max = 0;
    let freq = new Map();
    let output = [];

    function dfs(root) {
        if (!root) return 0;

        let left = dfs(root.left);
        let right = dfs(root.right);

        let sum = left + right + root.val;

        freq.set(sum, (freq.get(sum) || 0) + 1);

        let fr = freq.get(sum);

        if (max < fr) {
            max = fr;
            output = [sum];
        } else if (max === fr) {
            output.push(sum);
        }

        return sum;
    }

    dfs(root);
    return output;
};