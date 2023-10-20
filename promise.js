const promise = new Promise((resolve, reject) => {
  if (1 < 0) {
    // success
    resolve("Success");
  } else {
    // failed
    reject("Failed");
  }
});

promise.then((result) => console.log(result)).catch((err) => console.log(err));

// Chain Promise
promise
  .then((result) => `${result} + 1 then`)
  .then((result) => `${result} + 2 then`)
  .then((result) => `${result} + 3 then`)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

/**
 * Promise.all():
 *      - Tất cả fullfill -> fullfill
 *      - 1 promise reject -> reject ngay lập tức
 *
 *
 * Promise.allSettled()
 *      - Tất cả fullfill -> fullfill
 *      - 1 promise reject -> đợi những promise còn lại -> reject
 *
 *
 * Promise.race()
 *      - 1 promise fullfill -> fullfill ngay lập tức
 *      - 1 promise reject -> reject ngay lập tức
 *
 *
 */

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // output [3, 42, 'foo']
});
