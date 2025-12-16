/*

You are given an integer n.

Return the largest prime number less than or equal to n that can be expressed as the sum of one or more consecutive prime numbers starting from 2. If no such number exists, return 0.

 

Example 1:

Input: n = 20

Output: 17

Explanation:

The prime numbers less than or equal to n = 20 which are consecutive prime sums are:

2 = 2

5 = 2 + 3

17 = 2 + 3 + 5 + 7

The largest is 17, so it is the answer.

Example 2:

Input: n = 2

Output: 2

Explanation:

The only consecutive prime sum less than or equal to 2 is 2 itself.

 

Constraints:

1 <= n <= 5 * 105


*/



/**
 * @param {number} n
 * @return {number}
 */
var largestPrime = function (n) {
    let prime = new Array(n + 1).fill(true);
    let sum = 0, max = 0;

    prime[0] = false;
    prime[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (prime[i]) {
            for (let j = i * i; j <= n; j += i) {
                prime[j] = false;
            }
        }
    }

    for (let i = 2; i <= n; i++) {
        if (prime[i]) {
            sum += i;

            if (sum > n) break;

            if (prime[sum]) max = sum;
        }
    }

    return max;
};
