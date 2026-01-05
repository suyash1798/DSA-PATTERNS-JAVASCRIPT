/*

Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.

 

Example 1:


Input: root1 = [2,1,4], root2 = [1,0,3]
Output: [0,1,1,2,3,4]
Example 2:


Input: root1 = [1,null,8], root2 = [8,1]
Output: [1,1,8,8]
 

Constraints:

The number of nodes in each tree is in the range [0, 5000].
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    let list1 = [];
    let list2 = [];
    let list3 = [];

    function dfs(root, list) {
        if (!root) return;

        dfs(root.left, list);
        list.push(root.val);
        dfs(root.right, list);
    }

    dfs(root1, list1);
    dfs(root2, list2);

    let i = 0, j = 0;

    while (i < list1.length && j < list2.length) {
        if (list1[i] < list2[j]) {
            list3.push(list1[i++]);
        } else {
            list3.push(list2[j++]);
        }
    }

    while (i < list1.length) list3.push(list1[i++]);
    while (j < list2.length) list3.push(list2[j++]);

    return list3;
};