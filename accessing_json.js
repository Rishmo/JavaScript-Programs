let jsonRes = '{"fact":"The lightest cat on record is a blue point Himalayan called Tinker Toy, who weighed 1 pound, 6 ounces (616 g). Tinker Toy was 2.75 inches (7 cm) tall and 7.5 inches (19 cm) long.","length":178}'

let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);

let stu = {
    name: "Moon",
    roll: 79
};