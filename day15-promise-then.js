const promisecode = new Promise(function (Resolve, Reject) {
    let sucess = true;
    if (sucess) {
        Resolve("Promise is resolved");
    }
    else {
        Reject("Promise is rejected");
    }
});
promisecode.then(
    resolved=> {
        console.log(resolved);
    },
    error=>
    {
        console.log(error);
    }
)

