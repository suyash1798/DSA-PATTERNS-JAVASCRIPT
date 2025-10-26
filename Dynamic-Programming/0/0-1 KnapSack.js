/* Given two integer arrays to represent weights and profits of 'N' items, we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number 'C'. Write a function that returns the maximum profit. Each item can only be selected once, which means either we put an item in the knapsack or skip it. */

/* Recursive */

class Solution {
  solveKnapsack(profits, weights, capacity) {
    let memo = new Array(profits.length).fill(0).map(() => []);
    return this.getMaxProfit(profits, 0, weights, capacity, memo);
  };

  getMaxProfit(profits, index, weights, capacity, memo){
    if(capacity <= 0 || index === profits.length){
      return 0;
    }

    if(memo[index][capacity] !== undefined){
      return memo[index][capacity];
    }

    let include = 0;

    if(capacity >= weights[index]){
      include = profits[index] + this.getMaxProfit(profits, index+1, weights, capacity - weights[index], memo);
    }
    let exclude = this.getMaxProfit(profits, index+1, weights, capacity, memo);

    return memo[index][capacity] = Math.max(include, exclude);
  }
}