var test = require('tape');
var queue = require("./queues.js");

var testQueue = new queue.queue();

test("test the queue class", function(t){
  t.test("test the isEmpty()", function(t){
    t.true(testQueue.isEmpty(), "should be true");
    t.end();
  });
  t.test("test if the dequeue() does not create empty elements", function(t){
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    testQueue.dequeue();
    t.equal(testQueue.queue[2],undefined, "should be undefined");
    t.end();
  })
  t.test("test the enqueue() and dequeue()", function(t){
    testQueue.clear();
    t.true(testQueue.isEmpty(), "should be true");
    testQueue.enqueue(1);
    t.false(testQueue.isEmpty(), "should be false");
    t.equal(testQueue.dequeue(), 1, "should be one");
    t.true(testQueue.isEmpty(), "should be empty again");
    t.end();
  });
  t.test("test the first()", function(t) {
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    t.equal(testQueue.first(), 3, "should be 3");
    t.end();
  });
  t.test("test the clear()", function(t){
    t.false(testQueue.isEmpty(),"the queue should not be empty");
    testQueue.clear();
    t.true(testQueue.isEmpty(), "the queue now should have been cleared and therefore be empty");
    t.end();
  });
});
