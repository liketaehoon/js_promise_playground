// First Promise I use.
const promise = new Promise(function(resolve, reject){
    // do a thing, possible async, then..
    if (true) {
        resolve("Stuff work!");
    } else {
        reject(Error("It broke"));
    }
});

promise
    .then((result) => { console.log(result)}, (err) => { console.error(err); });

