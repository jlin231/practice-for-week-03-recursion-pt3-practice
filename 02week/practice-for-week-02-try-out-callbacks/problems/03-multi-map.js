/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/

function multiMap(val, n, cb) {
  // Your code here
  //first iteration of passing value into cb
  let a = cb(val);
  //iterate n-1 times because first iteration already occured
  if (n > 1) {
    for (let i = 0; i < n - 1; i++) {
      a = cb(a);
    }
  }
  return a;
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = multiMap;
} catch (e) {
  return null;
}
