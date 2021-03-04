// Directions
// Return a string with the order of characters reversed
// --- Examples
//   reverse('abcd') === 'dcba'
//   reverse('Hello!') === '!olleH'

function reverse(str) {
	// return str.split("").reverse().join("");

	let res = "";
	for (let i = str.length -1; i >= 0; i--) {
		res += str[i];
	}
	return res;
}

mocha.setup("bdd");
const { assert } = chai;

describe("String Reversal", () => {
	it("reverse() correctly reverses string", () => {
		assert.equal(reverse("ffaa"), "aaff");
		assert.equal(reverse("  aaff"), "ffaa  ");
	});
});

mocha.run();
