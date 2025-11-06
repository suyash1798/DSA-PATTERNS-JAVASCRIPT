/*

In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word derivative. For example, when the root "help" is followed by the word "ful", we can form a derivative "helpful".

Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the derivatives in the sentence with the root forming it. If a derivative can be replaced by more than one root, replace it with the root that has the shortest length.

Return the sentence after the replacement.

 

Example 1:

Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"
Example 2:

Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
Output: "a a b c"

*/


/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    let trie = buildTrie(dictionary);

    let words = sentence.split(' ');
    let output = [];

    for(let word of words){
        let root = trie;

        for(let ch of word){
            if(!root[ch])break;

            root = root[ch];

            if(root.isWord){
                output.push(root.word);
                break;
            }
        }
        if(!root.isWord) output.push(word);
    }

    return output.join(' ')
};

var buildTrie = function(words){
    let trie = {};

    for(let word of words){
        let root = trie;

        for(let ch of word){
            if(!root[ch]) root[ch] = {};

            root = root[ch];
        }

        root.isWord = true;
        root.word = word;
    }

    return trie;
};