var jsonPromise = new Promise((resolve, reject) => {
    resolve(JSON.parse('This ain\'t JSON'))
});

jsonPromise.then(() => {
    console.log('never executed');
}).catch((err)=> {
    console.log('error in catch');
});

jsonPromise
    .then(() => { // resolve
    }, (err) => { // reject
        console.log('reject handler in then');
    })
    .then(() => {
        console.log('then after reject handler');
    })
    .catch((err) => {
        console.log('error catch is not called');
    });

