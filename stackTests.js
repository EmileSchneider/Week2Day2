var test = require('tape');
var stack = require("./stack.js");

var testStack = new stack.stack();

test("Stack implementation", function(t) {
  t.test("test the pop() and the isEmpty()", function(t){
    testStack.push(1);
    t.equal(testStack.pop(), 1, "should be one");
    t.true(testStack.isEmpty(), "should be true");
    t.end();
  });
  t.test("test the clear()", function(t){
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    t.false(testStack.isEmpty(), "the Stack should not be empty");
    testStack.clear();
    t.true(testStack.isEmpty(), "the Stack should be empty now");
    t.end();
  });
  t.test("test the top()", function(t){
    testStack.push(1);
    t.equal(testStack.top(),1,"the top element should be 1");
    t.end();
  })
});
