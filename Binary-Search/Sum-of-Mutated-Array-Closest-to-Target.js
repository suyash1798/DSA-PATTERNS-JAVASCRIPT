/*

Given an integer array arr and a target value target, return the integer value such that when we change all the integers larger than value in the given array to be equal to value, the sum of the array gets as close as possible (in absolute difference) to target.

In case of a tie, return the minimum such integer.

Notice that the answer is not neccesarilly a number from arr.

 

Example 1:

Input: arr = [4,9,3], target = 10
Output: 3
Explanation: When using 3 arr converts to [3, 3, 3] which sums 9 and that's the optimal answer.
Example 2:

Input: arr = [2,3,5], target = 10
Output: 5
Example 3:

Input: arr = [60864,25176,27249,21296,20204], target = 56803
Output: 11361
 

Constraints:

1 <= arr.length <= 104
1 <= arr[i], target <= 105


*/




/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
    let start = 0, end = Math.max(...arr);
    let min = Infinity, minDiff = Infinity;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        let sum = getSum(arr, mid);
        let diff = Math.abs(sum - target);

        if(diff < minDiff){
            minDiff = diff;
            min = mid;
        }

        if(diff === minDiff) min = Math.min(min, mid);

        if(sum === target){
            break;
        }else if(sum < target){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }

    return min;
};

var getSum = function(arr, mid){
    let sum = 0;

    for(let n of arr){
        sum += Math.min(mid, n);
    }

    return sum;
}