/** 
Author : Build Rise Shine 

Created : 2023 

Script : Permutations

Description : Possible permutations

    Given an array nums of distinct integers, return all the possible permutations. You can 
    return the answer in any order.

(c) Copyright by BRS Studio. 
**/

// Algorithm
const permute = function (letters) {
  let res = [];
  dfs(letters, [], Array(letters.length).fill(false), res);
  return res;
};

function dfs(letters, path, used, res) {
  // BASE CASE
  if (path.length == letters.length) {
    res.push(Array.from(path));
    return;
  }
  for (let i = 0; i < letters.length; i++) {
    // skip used letters
    if (used[i]) continue;
    // add letter to permutation, mark letter as used
    path.push(letters[i]);
    used[i] = true;
    dfs(letters, path, used, res);
    // remove letter from permutation, mark letter as unused
    path.pop();
    used[i] = false;
  }
}

// Implementation
const arr = [5, 8, 10]; //3! = 6
const permutation = permute(arr);
console.log(`The possible permutation for the given array of integers ${arr} is`);
console.log(permutation);

// BIG O Notation
// Time complexity - O(n!) - which is n factorial
// Space complexity - O(n)
