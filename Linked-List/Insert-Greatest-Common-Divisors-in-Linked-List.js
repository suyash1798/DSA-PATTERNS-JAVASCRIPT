/*

Given the head of a linked list head, in which each node contains an integer value.

Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

Return the linked list after insertion.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

Example 1:

Input: head = [18,6,10,3]
Output: [18,6,6,2,10,1,3]
Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes (nodes in blue are the inserted nodes).
- We insert the greatest common divisor of 18 and 6 = 6 between the 1st and the 2nd nodes.
- We insert the greatest common divisor of 6 and 10 = 2 between the 2nd and the 3rd nodes.
- We insert the greatest common divisor of 10 and 3 = 1 between the 3rd and the 4th nodes.
There are no more adjacent nodes, so we return the linked list.

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
var insertGreatestCommonDivisors = function (head) {
    if (!head || !head.next) return head;

    let prev = head, pointer = head.next;

    while (pointer) {
        let n1 = prev.val, n2 = pointer.val;
        let gcd = findGCD(n1, n2);
        let node = new ListNode(gcd, pointer);
        prev.next = node;
        prev = pointer;
        pointer = pointer.next;
    }

    return head;
};

// TODO: Learn Euclidean algorithm to find gcd

var findGCD = function (a, b) {
    let n = Math.min(a, b);

    while (n) {
        let valid = a % n === 0 && b % n === 0;

        if (valid) {
            break;
        }

        n--;
    }

    return n;
}