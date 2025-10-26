/**
 * Given a set of positive numbers, determine if there exists a subset whose sum is 
 * equal to a given number 'S'.
 * 
 * Input: {1, 2, 3, 7}, S=6
 * Output: True
 * The given set has a subset whose sum is '6': {1, 2, 3}
 * 
 */

/** Recursive */

class Solution {
  canPartition(num, sum) {
    let memo = new Array(num.length).fill(0).map(() => []);

    return this.canPartitionUtil(num, sum, 0, memo);
  }

  canPartitionUtil(num, sum, index, memo) {
    if (sum === 0) {
      return true;
    }

    if (sum < 0 || index === num.length) {
      return false
    }

    if (memo[index][sum] !== undefined) {
      return memo[index][sum];
    }

    let include = this.canPartitionUtil(num, sum - num[index], index + 1, memo);
    let exclude = this.canPartitionUtil(num, sum, index + 1, memo);

    return memo[index][sum] = (include || exclude);
  }
}

/** Bottom - Up */


