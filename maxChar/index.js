// Return the character most commonly used in the string.
// --- Examples
// maxChar("I loveeeeeee noodles") === "e"
// maxChar("1337") === "3"

function maxChar(str) {
  let charCountObj = {};
  let maxChar = "";
  let maxCount = 0;

  for (let s of str) {
    charCountObj[s] = charCountObj[s] + 1 || 1;
    if (charCountObj[s] > maxCount) {
      maxChar = s;
      maxCount = charCountObj[s];
    }
  }
  return maxChar;
}


mocha.setup("bdd");
const { assert } = chai;

describe("Max Character", () => {
  it("maxChar() finds the most frequently used character", () => {
    assert.equal(maxChar("a"), "a");
    assert.equal(maxChar("test"), "t");
    assert.equal(maxChar("I loveeeeee noodles"), "e");
    assert.equal(maxChar("1337"), "3");
  });
});

mocha.run();
