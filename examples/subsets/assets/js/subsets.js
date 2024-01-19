/** 
Author : Build Rise Shine 

Created : 2023 

Script : Subsets

Description : write an algorithm to return the subsets for the given array of integers

    Given an integer array nums of unique elements, return all possible subsets (the power set).
    return the answer in any order. No duplicate subsets allowed.

(c) Copyright by BRS Studio. 
**/

// Constraints for the algorithm
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

// Algorithm
let subsets = function (nums) {
  let res = []; // the final arr, which we will display
  let auxArr = [],
    i = 0; // global vars

  function recur(nums, i, auxArr) {
    if (i == nums.length) {
      res.push(auxArr);
      return;
    } //operation of recursion will be upto i=n-1
    // when it will hit, i==n, it will store the computed arr, in the final arr, and break(return)

    // take it
    recur(nums, i + 1, [...auxArr, nums[i]]); //or, we can use 'aux.concat(nums[i])'

    // dont take
    recur(nums, i + 1, auxArr);
  }

  recur(nums, i, auxArr); // passing the global variable declared already
  return res; // rerturn the final 2d arr
};

// Implementation
const arr = [1, 2, 3, 4]; 
const possiblesubsets = subsets(arr);
console.log(`The possible subsets for the given ${arr} of integers is`);
console.log(possiblesubsets);
console.log(possiblesubsets.length);

// // // BIG O Notation
// Time complexity - O(2^n)
// Space complexity - O(n)



// A subset of a set is a collection of some or all of the elements of the set.
//  For example, the set {1, 2, 3} has the following subsets:

// Formula --> if a set a "n" elements then subset is 2^n (2 power n)

// {} 
// {1}
// {2}
// {3}
// {1, 2}
// {1, 3}
// {2, 3}
// {1, 2, 3}