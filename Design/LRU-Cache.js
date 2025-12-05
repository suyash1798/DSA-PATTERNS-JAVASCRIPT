/*

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

 

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
 

Constraints:

1 <= capacity <= 3000
0 <= key <= 104
0 <= value <= 105
At most 2 * 105 calls will be made to get and put.


*/




class LRUCache{

    constructor(capacity){
        this.capacity = capacity;
        this.list = new DLL();
        this.keyNodeMap = new Map();
        this.count = 0;
    }

    get(key){
        if(!this.keyNodeMap.has(key)){
            return -1;
        }

        this.list.remove(this.keyNodeMap.get(key));
        this.list.add(this.keyNodeMap.get(key));

        return this.keyNodeMap.get(key).value;
    }

    put(key, value){
        let node = this.keyNodeMap.get(key);

        if(!node){
            node = new ListNode(key, value);
            this.count++;
        }else{
            node.value = value;
            this.list.remove(node);
        }

        this.list.add(node);
        this.keyNodeMap.set(key, node);

        this.inValidate();
    }

    inValidate(){
        if(this.count <= this.capacity){
            return;
        }

        let node = this.list.peek();

        this.list.remove(node);
        this.keyNodeMap.delete(node.key);
        this.count--;
    }
}

class DLL{

    constructor(){
        this.head = new ListNode();
        this.tail = new ListNode();

        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.count = 0;
    }

    add(node){
        this.tail.prev.next = node;
        node.prev = this.tail.prev;
        node.next = this.tail;
        this.tail.prev = node;

        this.count++;
    }

    remove(node){
        let prev = node.prev;
        let next = node.next;

        prev.next = next;
        next.prev = prev;

        this.count--;
    }

    peek(){
       return this.head.next; 
    }

    size(){
        return this.count;
    }
}


class ListNode{

    constructor(key,  value){
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}