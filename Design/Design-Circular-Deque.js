/*

Design your implementation of the circular double-ended queue (deque).

Implement the MyCircularDeque class:

MyCircularDeque(int k) Initializes the deque with a maximum size of k.
boolean insertFront() Adds an item at the front of Deque. Returns true if the operation is successful, or false otherwise.
boolean insertLast() Adds an item at the rear of Deque. Returns true if the operation is successful, or false otherwise.
boolean deleteFront() Deletes an item from the front of Deque. Returns true if the operation is successful, or false otherwise.
boolean deleteLast() Deletes an item from the rear of Deque. Returns true if the operation is successful, or false otherwise.
int getFront() Returns the front item from the Deque. Returns -1 if the deque is empty.
int getRear() Returns the last item from Deque. Returns -1 if the deque is empty.
boolean isEmpty() Returns true if the deque is empty, or false otherwise.
boolean isFull() Returns true if the deque is full, or false otherwise.
 

Example 1:

Input
["MyCircularDeque", "insertLast", "insertLast", "insertFront", "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
Output
[null, true, true, true, false, 2, true, true, true, 4]

Explanation
MyCircularDeque myCircularDeque = new MyCircularDeque(3);
myCircularDeque.insertLast(1);  // return True
myCircularDeque.insertLast(2);  // return True
myCircularDeque.insertFront(3); // return True
myCircularDeque.insertFront(4); // return False, the queue is full.
myCircularDeque.getRear();      // return 2
myCircularDeque.isFull();       // return True
myCircularDeque.deleteLast();   // return True
myCircularDeque.insertFront(4); // return True
myCircularDeque.getFront();     // return 4
 

Constraints:

1 <= k <= 1000
0 <= value <= 1000
At most 2000 calls will be made to insertFront, insertLast, deleteFront, deleteLast, getFront, getRear, isEmpty, isFull.


*/

var Node = function (val){
    this.val = val;
    this.next = this.previous = null;
}
/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.head = new Node(0);
    this.tail = new Node(0);
    this.head.next = this.tail;
    this.tail.previous = this.head;
    this.capacity = k;
    this.len = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    var node = new Node(value);

    return this.addNode(node, this.head.next);;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {

    var node = new Node(value);

    return this.addNode(node, this.tail);
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {

    return this.deleteNode(this.head.next);
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {

    return this.deleteNode(this.tail.previous);
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(!this.len) return -1;

    return this.head.next.val;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(!this.len) return -1;

    return this.tail.previous.val;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return !this.len;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.len === this.capacity;
};

MyCircularDeque.prototype.addNode = function(node, next){
    if(this.capacity === this.len) return false;

    var previous = next.previous;

    node.next = next;
    node.previous = previous;

    next.previous = node;

    previous.next = node;

    this.len++;

    return true;
}

MyCircularDeque.prototype.deleteNode = function(node){
    if(this.len === 0) return false;

    var previous = node.previous;
    var next = node.next;

    previous.next = next;
    
    next.previous = previous;

    this.len--;

    return true;
}

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */