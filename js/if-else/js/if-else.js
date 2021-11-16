// let a = 5
// if(a < 4 ){
//     console.log("Yes 5 < 4")
// } else{
//     console.log("No 5 > 4")
// }

let age = prompt("How old are you?");
let userAge = `Your age : ${age}`;

let height = prompt("Enter your height (cm)");
let userHeight = `Your height : ${height} cm`;
let weight = prompt("Enter your weight (kg)");
let userWeight = `Your weight : ${weight} kg` 

let indexWeightBody = (weight /(height**2))*10000;
let indexWeightBodyFix = indexWeightBody.toFixed(1);

if(age < 18){
    console.log(userAge)
    console.log("No data for your age")
    console.log("Minimum age for calculation : 18 age")
}else if(age >= 18 && age <= 25){
        console.log("Your index weight body = "+ indexWeightBodyFix + " kg/m2")
        if(indexWeightBodyFix <= 17.5){
            console.log("Your weight is too low, it is dangerous for your health")
        } else if(indexWeightBodyFix > 17.5 && indexWeightBodyFix < 19.5){
            console.log("Your weight is slightly reduced, not dangerous for your health")
        } else if (indexWeightBodyFix >= 19.5 && indexWeightBodyFix < 23){
            console.log("Your weight normal")
        } else if (indexWeightBodyFix >= 23 && indexWeightBodyFix < 27.4){
            console.log("Your are overweinght")
        }else if (indexWeightBodyFix >= 27.4 && indexWeightBodyFix < 30){
            console.log("You have first degree obesity")
        }else if (indexWeightBodyFix >= 30 && indexWeightBodyFix < 35){
            console.log("You have second degree obesity ")
        }else if (indexWeightBodyFix >= 35 && indexWeightBodyFix <= 40){
            console.log("You have third degree obesity, it is dangerous for your health")
        } else{
            console.log("You have fourth degree obesity, it is dangerous for your health")
        }
    }else if(age > 26 && age <= 46){
        console.log("Your index weight body = "+ indexWeightBodyFix + " kg/m2")
        if(indexWeightBodyFix <= 18){
            console.log("Your weight is too low, it is dangerous for your health")
        } else if(indexWeightBodyFix > 18 && indexWeightBodyFix < 20){
            console.log("Your weight is slightly reduced, not dangerous for your health")
        } else if (indexWeightBodyFix >= 20 && indexWeightBodyFix < 26){
            console.log("Your weight normal")
        } else if (indexWeightBodyFix >= 26 && indexWeightBodyFix < 28){
            console.log("Your are overweinght")
        }else if (indexWeightBodyFix >= 28 && indexWeightBodyFix < 31){
            console.log("You have first degree obesity")
        }else if (indexWeightBodyFix >= 31 && indexWeightBodyFix < 36){
            console.log("You have second degree obesity ")
        }else if (indexWeightBodyFix >= 36 && indexWeightBodyFix <= 41){
            console.log("You have third degree obesity, it is dangerous for your health")
        } else{
            console.log("You have fourth degree obesity, it is dangerous for your health")
        }
    } else{
        console.log(userAge)
        console.log("No data for your age")
        console.log("Maximum age for calculation : 46 age")
    }








// 180/58  17.9 not dengerous 


// let height = prompt("Enter your height (cm)");
// let userHeight = `Your height : ${height} cm`;
// let weight = prompt("Enter your weight (kg)");
// let userWeight = `Your weight : ${weight} kg` 

// let indexWeightBody = (weight /(height**2))*10000;
// let indexWeightBodyFix = indexWeightBody.toFixed(1);

// if (indexWeightBodyFix < 25){
//     console.log("Your index weight body = "+ indexWeightBodyFix + " kg/m2")
//     console.log("You are the normal weight =)")
// } else if(indexWeightBodyFix > 25) {
//     console.log("Your index weight body = "+ indexWeightBodyFix + " kg/m2")
//     console.log("You are overweight =(")
// }
    


// console.log(userHeight);
// console.log(userWeight);
// console.log(indexWeightBodyFix);
