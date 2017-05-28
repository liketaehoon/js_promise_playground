// following codes are show at https://scotch.io/tutorials/javascript-promises-for-dummies

const isMomHappy = false;

var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            throw reason;
            reject(reason); // reject
        }
    }
);

var showOff = function (phone) {
    /*    return new Promise(
        function (resolve, reject) {
            resolve(`Hey friend, I have a new ${phone.color} ${phone.brand} phone.`);
        }
    ); */
    // shortcut for always resolve
    //
    return Promise.resolve(`Hey friend, I have a new ${phone.color} ${phone.brand} phone.`);
};

const askMom = () => {
    console.log('before asking mom');
    willIGetNewPhone
        .then(showOff)
        .then((fulfilled) => {
            console.log(fulfilled)
        })
        .catch((error) => {
            console.log(error.message);
        });
    console.log('after asking mom');
};

askMom();
