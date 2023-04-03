function isPalindrome(word) {
  // Write your algorithm here

    // Convert the string to lowercase
    word = word.toLowerCase();

    // I use regular expressions to remove spaces
    word = word.replace(/\s/g, '');
    
    // Reverse the string
    var reversedInputWord = word.split('').reverse().join('');
    
    // Check if the reversed string is equal to the original string
    if (word === reversedInputWord) {
      return true;
    } else {
      return false;
    
  }
  
}

/* 
  Add your pseudocode here

  1. First, I convert the input string into lowercase
  2. Then I remove spaces 
  3. And then I split the string characters
  4. Reverse the string
  5. Finally, I join the characters

  function isPalindrome(str):
  // Reverse the string
  reversedStr = str split into an array, reverse the array, 
  and join the reversed characters back into a string
  // Compare the original string with the reversed string
  if str is equal to reversedStr:
    return true
  else:
    return false

*/

/*
  Add written explanation of your solution here

First, we convert the input string to lowercase using the toLowerCase() method,
and remove any non-alphanumeric characters 
(e.g. spaces, punctuation) using a regular expression that replaces 
anything that's not a letter or number with an empty string.

Then, we reverse the string using the reverse() method, 
split it into an array of characters using the split('') method, 
and join the characters back together into a string using the join('') method.

Finally, we compare the reversed string to the original string using the === operator, 
and return true if they're equal (i.e. the string is a palindrome) 
or false if they're not (i.e. the string is not a palindrome).
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
