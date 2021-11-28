let personYurii = {
    firstName: "Yurii",
    lastName: "Paraka",
    age: 28,
    isMarried: false,
    pets: ["cat","mouse","snake"]
};


let toyoya = ["camry",2010,"sedan","red", true];

let obj = {
    name: "key"
}

let carToyota={
    model: "Camry",
    year: 2010,
    carBody: "sedan",
    color: "red",
    hasAirbag: true
};
console.log(carToyota);  //{model: 'Camry', year: 2010, carBody: 'sedan', color: 'red', hasAirbag: true}
console.log(carToyota["color"]); // red
console.log(carToyota.color) // red

carToyota.color = "Yellow"
console.log(carToyota.color) // Yellow



