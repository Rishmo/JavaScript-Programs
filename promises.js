function savetoDB(data){
    return new Promise((resolve, reject) => { // return new promise
        let internetSpeed = Math.floor(Math.random() *10)+1;

        if(internetSpeed >4) {
            resolve("Data was saved");
        } else {
            reject("Failure: weak connection");
        }
    });
}

//savetoDB("Moon");


// Promise Chaining concept

savetoDB("Moon")
    .then(() => {
        console.log("Promise1 resolved");
        saveToDBPromise("Hello World");
    })
    .then(() => {
        console.log("Promise2 resolved");
        saveToDBPromise("Hello World 2");
    })
    .catch(() => {
        console.log("Some Promises Rejected");
    });


// Promises are rejected and resolved with some data( valid results or errors)





