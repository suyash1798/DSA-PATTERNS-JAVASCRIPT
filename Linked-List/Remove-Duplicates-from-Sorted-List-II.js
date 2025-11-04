/*

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

Example 1:


Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
Example 2:


Input: head = [1,1,1,2,3]
Output: [2,3]

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let dummy = new ListNode(0), tail = dummy;

    while (head) {
        let next = head.next, count = 0;
        
        while (next) {
            if (next.val !== head.val) break;
            count++;
            next = next.next;
        }

        if (count === 0) {
            tail.next = head;
            tail = tail.next;
        }

        head = next;
    }

    tail.next = null;

    return dummy.next;
};