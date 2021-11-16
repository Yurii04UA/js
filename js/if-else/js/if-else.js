let height = prompt("Enter your height (cm)");
let userHeight = `Your height : ${height} cm`;
let weight = prompt("Enter your weight (kg)");
let userWeight = `Your weight : ${weight} kg` 

let indexWeightBody = (weight /(height**2))*10000;
let indexWeightBodyFix = indexWeightBody.toFixed(1);

if (indexWeightBodyFix < 25){
    console.log("Your index weight body = "+ indexWeightBodyFix + " kg/m2")
    console.log("You are the normal weight =)")
} else if(indexWeightBodyFix > 25) {
    console.log("Your index weight body = "+ indexWeightBodyFix + " kg/m2")
    console.log("You are overweight =(")
}
    


// console.log(userHeight);
// console.log(userWeight);
// console.log(indexWeightBodyFix);