setTimeOut(function run() {
  console.log("Hello");
  setTimeOut(run, 100);
}, 100);

setInterval(function run() {
  console.log("Hello");
}, 100);
