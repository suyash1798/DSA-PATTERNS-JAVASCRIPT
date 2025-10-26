/* Given two integer arrays to represent weights and profits of 'N' items, we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number 'C'. Write a function that returns the maximum profit. Each item can only be selected once, which means either we put an item in the knapsack or skip it. */

/* Recursive */

class Solution {
  solveKnapsack(profits, weights, capacity) {
    return this.getMaxProfit(profits, 0, weights, capacity);
  };

  getMaxProfit(profits, index, weights, capacity){
    if(capacity <= 0 || index === profits.length){
      return 0;
    }

    let include = 0;

    if(capacity >= weights[index]){
      include = profits[index] + this.getMaxProfit(profits, index+1, weights, capacity - weights[index]);
    }
    let exclude = this.getMaxProfit(profits, index+1, weights, capacity);

    return Math.max(include, exclude);
  }
}