function isPalindrome(word) {
  // Write your algorithm here
  let firstChar = word[0];

  // console.log(true);
  let wordArray = word.split("");
  let reversedArray = wordArray.filter((char, index) => {
    return wordArray[wordArray.length - 1 - index] === char;
  });

  return reversedArray.length === wordArray.length;
}

/* 
  Add your pseudocode here
  how about before we convert the word to an array we first check if the word starts 
  and ends with the same character  then convert it to an array? if not
  we return false
  will first convert the word input to an array
  we have converted each individual character into its own element in an array.
  in here each letter starts and ends with the same character, 
  in here we check the characters within and compare their positions
  get the second last character and compare it to the secodn character

  
*/

/*
  Add written explanation of your solution here
  This solution converts the word into an array, 
  checks if characters match their counterparts from the opposite ends, 
  and compares the lengths of the resulting
   matched characters array to determine if the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
