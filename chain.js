// Promise Chain
const promiseChain = new Promise((resolve, reject) => { resolve(1); });
promiseChain.then((val) => { return val +1; }).then((val) => { console.log(val); });


