/** 
Author : Build Rise Shine 

Created : 2023 

Script : Decode ways

Description : write an algorithm to decode the encoded message

    A message containing letters from A-Z can be encoded into numbers using the following mapping:
        'A' -> "1"
        'B' -> "2"  
        ...
        'Z' -> "26"
    To decode an encoded message, all the digits must be grouped then mapped back into letters using 
    the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped 
    into:
        "AAJF" with the grouping (1 1 10 6)
        "KJF" with the grouping (11 10 6)

    Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is 
    different from "06".

    Given a string s containing only digits, return the number of ways to decode it.

(c) Copyright by BRS Studio. 
**/

// Algorithm
function numDecodings(str) {
  if (str == null || str.length === 0) return 0;
  if (str[0] === "0") return 0;

  const dp = new Array(str.length + 1).fill(0); //creates a new zero filled array
  // console.log(dp); //[0, 0, 0, 0, 0] 

  // for string with 1 char
  dp[0] = 1;
  dp[1] = 1;

  

  for (let i = 2; i <= str.length; i++) {
    const a = Number(str.slice(i - 1, i)); // last one digit 1 t0 9
    // console.log(a);
    if (a >= 1 && a <= 9) {
      dp[i] += dp[i - 1];  // dp[i] = dp[i] + dp[i-1] 
                           // dp[2] = dp[2] + dp[2-1] --> 0 + 1 = 1
    }

    const b = Number(str.slice(i - 2, i)); // last two digits 10 to 26
    if (b >= 10 && b <= 26) {
      dp[i] += dp[i - 2];  // dp[i] = dp[i] + dp[i-2] 
                           // dp[2] = dp[2] + dp[2-2] --> 1 + 1 = 2
    }
  }

  console.log('DECODE WAYS = ' +  dp[str.length]);
  console.log(dp);
  return dp[str.length];
}

// Constraints for the algorithm
// 1 <= s.length <= 100
// s contains only digits and may contain leading zero(s).

// Implementation
const inputStr = "1126";
const differentWays = numDecodings(inputStr);
console.log(
  `The number of ways the given string ${inputStr} can be decoded is ${differentWays}`
);

// different combination for 1126 is
// 1 1 2 6
// 11 26
// 1 12 6
// 11 2 6
// 1 1 26

// // BIG O Notation
// Time complexity - O(n)
// Space complexity - O(n)
