/*

Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value. This path may or may not pass through the root.

The length of the path between two nodes is represented by the number of edges between them.

 

Example 1:


Input: root = [5,4,5,1,1,null,5]
Output: 2
Explanation: The shown image shows that the longest path of the same value (i.e. 5).
Example 2:


Input: root = [1,4,5,4,4,null,5]
Output: 2
Explanation: The shown image shows that the longest path of the same value (i.e. 4).
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-1000 <= Node.val <= 1000
The depth of the tree will not exceed 1000.


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
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    let max = 0;

    function dfs(root){
        if(!root) return 0;

        if(!root.left && !root.right) return 1;

        let left = dfs(root.left);
        let right = dfs(root.right);

        let count = 1;

        if(root.left && root.val === root.left.val) count += left;
        if(root.right && root.val === root.right.val) count += right;

        max = Math.max(max, count);

        let maxPath = 1;

        if(root.left && root.val === root.left.val) maxPath = Math.max(maxPath, 1 + left);
        if(root.right && root.val === root.right.val) maxPath = Math.max(maxPath, 1 + right);

        return maxPath;
    }

    dfs(root);
    return Math.max(0, max - 1);
};