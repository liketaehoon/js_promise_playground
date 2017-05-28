var jsonPromise = new Promise((resolve, reject) => {
    resolve(JSON.parse('This ain\'t JSON'))
});

jsonPromise.then(() => {
    console.log('never executed');
}).catch((err)=> {
    console.log('error!', err);
});
