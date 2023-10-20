// // normal function
// function greet1() {
//   return "Hello";
// }
// console.log(greet1()); // Hello

// // async function
// async function greet2() {
//   return "Hello";
// }
// console.log(greet2()); // Promise { 'hello' }
// greet2().then((result) => console.log(result)); // 'hello'

/**
 * Async/await keyword
 */

// async function greet3() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("resolve"), 100);
//   });

//   const result = await promise;
//   console.log(result); // resolve
// }
// greet3();

// sequencial and concurent execution
function resolveHello() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("Hello");
    }, 2000);
  });
}
function resolveWorld() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("World");
    }, 1000);
  });
}

// async function sequencialFunction() {
//   const hello = await resolveHello();
//   console.log(hello); // hello - after 2s

//   const world = await resolveWorld();
//   console.log(world); // world - after hello 1s - total 3s
// }
// sequencialFunction();

// async function concurrentFunction() {
//   const hello = resolveHello();
//   const world = resolveWorld();
//   console.log(await hello); // hello - after 2s
//   console.log(await world); // world - after 2s
// }
// concurrentFunction();

//// parallel execution
function parallel1() {
  Promise.all([parallelHello(), parallelWorld()]);
}

function parallel2() {
  Promise.all([
    (async () => console.log((await resolveHello()) + "2"))(), // Hello 2s
    (async () => console.log((await resolveWorld()) + "2"))(), // World 1s
  ]);
  console.log("parallel 2");
}

async function parallel3() {
  await Promise.all([
    (async () => console.log((await resolveHello()) + "3"))(), // Hello 2s
    (async () => console.log((await resolveWorld()) + "3"))(), // World 1s
  ]);
  console.log("parallel 3");
}

async function parallelHello() {
  const hello = resolveHello();
  console.log(await hello);
}
async function parallelWorld() {
  const world = resolveWorld();
  console.log(await world);
}

// parallel1();
parallel2();
parallel3();
