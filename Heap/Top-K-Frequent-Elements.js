/*

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2

Output: [1,2]

Example 2:

Input: nums = [1], k = 1

Output: [1]

Example 3:

Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

Output: [1,2]

 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


*/




/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freq = {};

    for(let num of nums){
        if(!freq[num]) freq[num] = 0;
        freq[num]++;
    }

    let heap = new MinPriorityQueue((a) => a[1]);

    for(let key in freq){
        heap.push([key, freq[key]]);

        if(heap.size() > k) heap.pop();
    }

    return heap.toArray().map(a => +a[0]);
};