// function savetoDB(data){
//     let internetSpeed = Math.floor(Math.random() *10)+1;
//     if(internetSpeed >4){
//         console.log("your data was saved : ", data);
//     }
//     else{
//         console.log("weak connection. 'your data is not saved'");
//     }
// }

function savetoDB(data, success, failure){
    let internetSpeed = Math.floor(Math.random() *10)+1;
    if(internetSpeed >4){
        success();
    }
    else{
        failure();
    }
}

savetoDB("Moon", () => {
    console.log("Success :your data was saved ");

    savetoDB("Hello", () => {
        console.log("Success2 :your data was saved ");

        savetoDB("Hiii", () => {
            console.log("Success3 : data3 saved ");
            },
            () =>{
                console.log("Failure3: weak connection. 'your data3 is not saved'");
            }
        );

        },
        () =>{
            console.log("Failure2: weak connection. 'your data2 not saved'");
        }
    );

    },
    () =>{
        console.log("Failure: weak connection. 'your data is not saved'");
    }
);