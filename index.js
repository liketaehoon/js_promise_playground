// First Promise I use.
const promise = new Promise(function(resolve, reject){
    // do a thing, possible async, then..
    if (true) {
        resolve("Stuff work!");
    } else {
        reject(Error("It broke"));
    }
});

promise.then((result) => { console.log(result)}, (err) => { console.error(err);});

// Promise Chain
const promiseChain = new Promise((resolve, reject) => { resolve(1); });
promiseChain.then((val) => { return val +1; }).then((val) => { console.log(val); });

// Promise Error & Catch


