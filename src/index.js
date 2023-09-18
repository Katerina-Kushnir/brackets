module.exports = function check(str, bracketsConfig) {
  const bracketPairs = new Map(bracketsConfig);
  const stack = [];

  for (const char of str) {
    if (bracketPairs.has(char)) {
      if (stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(bracketPairs.get(char));
      }
    } else {
      if (stack.length === 0 || stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}


