/*

balance brackets

http://clarkfeusier.com/2015/01/16/interview-question-balanced-parentheses-stack.html

time / space = O(n)

*/

const balancedParens = function (str) {
  const stack = []
  const open = { '(': ')', '{': '}', '[': ']' }
  const closed = { '}': true, ']': true, ')': true }

  for (let i = 0; i < str.length; i++) {
    if (open[str[i]]) {
      stack.push(str[i])
    } else if (closed[str[i]]) {
      if (open[stack.pop()] !== str[i]) {
        return false
      }
    }
  }

  return stack.length === 0
};

// console.log(balancedParens('('), '----', false);  // false
// console.log(balancedParens('()'), '----', true); // true
console.log(balancedParens(')('), '----', false);  // false
console.log(balancedParens('(())'), '----', true);  // true
console.log(balancedParens('[](){}'), '----', true); // true
// console.log(balancedParens('[({})]'), '----', true);   // true
// console.log(balancedParens('[(]{)}'), '----', false); // false
// console.log(balancedParens('var supYo  = { hey: dog() }'), '----', true); // true
// console.log(balancedParens('var fiddle = function() { doggy.eat();'), '----', false); // false
