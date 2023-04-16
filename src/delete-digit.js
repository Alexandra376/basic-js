const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let value1 = 0;
    string = n.toString();
  for (let i = 0; i < string.length; i++) {
    let value2 =+ (string.slice(0, i) + string.slice(i + 1));
    console.log();
    value1 = Math.max(value1, value2);
  }
  return value1;
}

module.exports = {
  deleteDigit
};
