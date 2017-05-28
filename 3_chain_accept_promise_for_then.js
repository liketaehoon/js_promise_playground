// Promise Chain
const promiseChainStartsWith1 = new Promise((resolve, reject) => { resolve(1); });
const promiseChainStartsWith2 = new Promise((resolve, reject) => { console.log('called'); resolve(2); });
promiseChainStartsWith1.then(promiseChainStartsWith2).then((val) => { return val +1; }).then((val) => { console.log(val); });
// print '2' not same as I expect, I expect 3
promiseChainStartsWith1.then(() => { return promiseChainStartsWith2;}).then((val) => { return val +1; }).then((val) => { console.log(val); });
// print '3' as I expected

