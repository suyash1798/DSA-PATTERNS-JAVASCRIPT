/*

You are given two integers, n and k, along with two 2D integer arrays, stayScore and travelScore.

A tourist is visiting a country with n cities, where each city is directly connected to every other city. The tourist's journey consists of exactly k 0-indexed days, and they can choose any city as their starting point.

Each day, the tourist has two choices:

Stay in the current city: If the tourist stays in their current city curr during day i, they will earn stayScore[i][curr] points.
Move to another city: If the tourist moves from their current city curr to city dest, they will earn travelScore[curr][dest] points.
Return the maximum possible points the tourist can earn.

 

Example 1:

Input: n = 2, k = 1, stayScore = [[2,3]], travelScore = [[0,2],[1,0]]

Output: 3

Explanation:

The tourist earns the maximum number of points by starting in city 1 and staying in that city.

Example 2:

Input: n = 3, k = 2, stayScore = [[3,4,2],[2,1,2]], travelScore = [[0,2,1],[2,0,4],[3,2,0]]

Output: 8

Explanation:

The tourist earns the maximum number of points by starting in city 1, staying in that city on day 0, and traveling to city 2 on day 1.

 

Constraints:

1 <= n <= 200
1 <= k <= 200
n == travelScore.length == travelScore[i].length == stayScore[i].length
k == stayScore.length
1 <= stayScore[i][j] <= 100
0 <= travelScore[i][j] <= 100
travelScore[i][i] == 0


*/




/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} stayScore
 * @param {number[][]} travelScore
 * @return {number}
 */
var maxScoreMemo = function (n, k, stayScore, travelScore) {

    let dp = new Array(n).fill(0).map(() => new Array(k).fill(-1));

    function dfs(city, day) {
        if (day === k) return 0;

        if (dp[city][day] !== -1) return dp[city][day];

        let max = 0;

        for (let i = 0; i < n; i++) {
            if (city === i) continue;

            max = Math.max(max, travelScore[city][i] + dfs(i, day + 1))
        }

        max = Math.max(max, stayScore[day][city] + dfs(city, day + 1))

        return dp[city][day] = max;
    }

    let max = 0;

    for (let i = 0; i < n; i++) max = Math.max(max, dfs(i, 0))

    return max;
};



///// Top-Down DP



var maxScore = function (n, k, stayScore, travelScore) {

    let dp = new Array(n).fill(0).map(() => new Array(k + 1).fill(0));

    for (let day = k - 1; day >= 0; day--) {

        for (let city = 0; city < n; city++) {

            let best = stayScore[day][city] + dp[city][day + 1];

            for (let c = 0; c < n; c++) {
                if (city === c) continue;

                best = Math.max(best, travelScore[city][c] + dp[c][day + 1])
            }

            dp[city][day] = best;
        }
    }

    let max = 0;

    for (let i = 0; i < n; i++) max = Math.max(max, dp[i][0])

    return max;
}
