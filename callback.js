function greet(name) {
  console.log(`Hello ${name}`);
}

// synchronous callback
function highOrderFunction(callback) {
  const name = "Thanh Dat";
  callback(name);
}
highOrderFunction(greet);

// asynchronous callback
setTimeout(greet, 2000, "thanh dat timeout");
