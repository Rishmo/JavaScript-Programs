// // for printing facts in console using axios

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res =await axios.get(url);
//         console.log(res.data.fact);
//     } catch (e) {
//         console.log("error =",e)
//     }
// };


//printing facts after button press

let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    // console.log("Button was clicked");
    let catfact = await getFacts();
    //console.log(catfact);

    let p = document.querySelector("#fact");
    p.innerText = catfact;
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res =await axios.get(url);
        // console.log(res.data.fact);
        return res.data.fact;
    } catch (e) {
        console.log("error =",e);
        return "No fact Found";
    }
};