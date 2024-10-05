let url = "https://catFact.ninja/fact";

// fetch(url)
//     .then((res) => {
//         console.log(res);
//         //console.log(res.json());
//         res.json().then((data) => {
//             console.log(data);
//         })
//     })
//     .catch((err) => {
//         console.log("ERROR- ",err);
//     });

fetch(url)//first req
    .then((res) => {//first req successfull
        return res.json(); // then return in json format
    })
    .then((data1) => { //then one more promise is catched for data
        console.log("data1 =", data1.fact); //then we get data1 and print it
        return fetch(url);// then putting one more request
    })
    .then((res) => { //when we get another req response
        return res.json(); // response catches and retun its json and one more promise is resolved 
    })
    .then((data2) => { //then we catch promise object data2
        console.log("data2 =", data2.fact); //print data2 value
    })

    .catch((err) => {
        console.log("ERROR- ", err);
    });
