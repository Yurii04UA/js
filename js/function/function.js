arr = [11,23,45,64,546,1,-11]

    // let userName = prompt("What is your name?")
    // let userAge = prompt("How old are you?")
// function func(name, age){
//     console.log("hello " + name  + " your age : "+ age );
    
// }

// func("Yurii", 22);
// func(userName, userAge);

///////////////////////////
//     let userName = prompt("What is your name?")
//     let userAge = prompt("How old are you?")
// function func(name,age){
//     return "user : "+name+ " age : "+age  
// }

// let a = func(userName,userAge);
// console.log(a)

/////////////////////////////////


// function randomNumber(){
//    let number = Math.floor(Math.random()*100)
//    for(let count=1; count<=10; count++){
//        let userNumb = prompt(`Guess the number from 1 to 100; try : ${count}`)
//        if(userNumb==null) {
//             return alert("don`t you want to test your luck")
//         }else if(userNumb==number){
//             return alert(`Yes you guessed it number : ${number}; number of attempts ${count}`)
//         }else if(userNumb<number){
//             alert(`No the hidden number is less ; try number: ${count}`)
//         }else if(userNumb>number){
//             alert(`No the hidden number is greater ; try number: ${count}`)
//         } else {
//             alert("ne chislo, debil")
//         }
//    }
//     alert(`You did not guess the number(hidden number : ${number}),try again`)
// }
// randomNumber();

//////////////////////////////////
// if(isNaN(kk)) - проверяем является ли введеный данный числом
// function itsNan(){
//     let kk = prompt("number")
//     if(kk==null){
//         return console.log("cancel")
//     }else if(isNaN(kk)){
//         console.log("its not number")
//     }else if(kk>= 0 ){
//         console.log("Number")
//     }
// }

// itsNan()

function randomNumber (){
    let number = Math.floor(Math.random()*100)
    for (let i=1;i<=10;i++){
        let userNumb = prompt(`Your number from 1 to 100, try number : ${i}` )
        if (userNumb===null){
            return alert("Cancel")
        }else if(isNaN(userNumb)){
            alert(`it is not number, try number : ${i}`)
        } else if(userNumb==number){
            return alert(`Great, you win!! it is number : ${number}, try number : ${i}`)
        }else if (userNumb<number){
            alert(`No, number is less, try number : ${i}`)
        }else if (userNumb>number){
            alert(`No, number is more, try number : ${i}`)
        }
    }
    return alert(`You debil`)
}



randomNumber()














