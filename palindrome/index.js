// Given a string, return true or false depending if the string
// is a palindrome.  Palindromes are words that read the same backwards
// and forwards. Make sure it is case insensitive!
// --- Examples:
//   palindrome("Madam") === true
//   palindrome("love") === false

function palindrome(str) {
  // str = str.toLowerCase();
  // const reveredStr = str.split('').reverse().join('');
  // if (str == reveredStr) {
  //   return true;
  // } else {
  //   return false;
  // }

  if(str.length < 2) { // bcb
    return true
  }
  if(str[0] === str[str.lenght -1]) {  // b === b
    return palindrome(1, str.length -1)  //c
  }
}

// const isPalindrome = str => {
//   const strLen = str.length;
//   if (strLen < 2) return true;

//   if (str[0] === str[strLen - 1]) {
//       return isPalindrome( str.slice(1, strLen - 1) );
//   }

//   return false;
// };

// console.log(isPalindrome('madam'));


mocha.setup("bdd");
const { assert } = chai;

describe("Palindrome", () => {
  it('"bcb" is a palindrome', () => {
    assert.equal(palindrome("bcb"), true);
  });
  it('"   bcb" is not a palindrome', () => {
    assert.equal(palindrome(" bcb"), false);
  });
  it('"bcb   " is not a palindrome', () => {
    assert.equal(palindrome("bcb "), false);
  });
  it('"love" is not a palindrome', () => {
    assert.equal(palindrome("love"), false);
  });
  it('"699996" a palindrome', () => {
    assert.equal(palindrome("699996"), true);
  });
  it('"racecar" a palindrome', () => {
    assert.equal(palindrome("bcb"), true);
  });
  it("is case insensitive.", () => {
    assert.equal(palindrome("Trunk knurt"), true);
  });
});

mocha.run();
