let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async() => {
    let link = await getImg();
    console.log(link);

    let img = document.querySelector("#pic");
    img.setAttribute("src", link);
});


async function getImg() {
    try {
        let res =await axios.get(url2);
        return res.data.message;
    } catch (e) {
        console.log("error =",e);
        return "/";
    }
};