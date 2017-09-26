var test = require("tape");
var set = require("./set.js")

var testSet = new set.set();
test("test the Set", function(t){
  t.test("test the insert method", function(t){
    t.deepEqual(Object.keys(testSet.elements), [], "should contain no elements");
    testSet.insert(1);
    t.notDeepEqual((Object.keys(testSet) == []), "should contain some elements");
    t.end();
  });
  t.test("test the remove method", function(t){
    testSet.remove(1);
    t.deepEqual(Object.keys(testSet.elements), [], "should contain no elements");
    t.end();
  });
  t.test("test the has method", function(t){
    testSet.insert(1);
    t.true(testSet.has(1), "should be true");
    t.end();
  });
  t.test("test the all method", function(t){
    testSet.insert(2);
    testSet.insert(3);
    testSet.insert(4);
    t.deepEqual(testSet.all(), [1,2,3,4], "the set should contain all the elements [1,2,3,4]");
    t.end();
  });
  t.test("test the length method",function(t){
    t.equal(testSet.length(), 4, "should be 4");
    t.end();
  });
});
