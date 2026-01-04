/*

Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

 

Example 1:


Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
Example 2:


Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []
 

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 12
board[i][j] is a lowercase English letter.
1 <= words.length <= 3 * 104
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
All the strings of words are unique.

*/


/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    let trie = buildTrie(words);
    let m = board.length, n = board[0].length;
    let dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let output = [];

    function dfs(row, col, root) {
        if (row < 0 || col < 0 || row >= m || col >= n) return;

        let letter = board[row][col];

        if (!root[letter]) return;

        root = root[letter];

        if (root.word) {
            output.push(root.word);
            root.word = null;
        }

        board[row][col] = '';

        for (let [r, c] of dirs) {
            dfs(row + r, col + c, root);
        }

        board[row][col] = letter;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(i, j, trie);
        }
    }

    return output;
};

var buildTrie = function (words) {
    let trie = {};

    for (let word of words) {
        let root = trie;

        for (let ch of word) {
            if (!root[ch]) root[ch] = {};

            root = root[ch];
        }

        root.word = word;
    }

    return trie;
}