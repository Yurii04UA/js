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



// function isNumberOdd(number){
//     if (number%2===0){
//         return console.log(false)
//     }else{
//         return console.log(true)
//     }
// }

// function isNumberOdd(number){
//     return number%2 !==0
// }

// console.log(isNumberOdd(11))

// isNumberOdd(11)
// isNumberOdd(8)
// isNumberOdd(0)
// isNumberOdd(23)

// Factorial

let factorial = function(number){
    let result =1
    for(i=1;i<=number;i++){
        result= result*i;
    }
    return result
}

console.log(factorial(4))
////////////////////////////////////////////////////////// замена символа в строке
// let text = "You something any lf asd asff sad"
// let newText = text.replace(/ /g,`_`)
// console.log(newText)


// function change(text){
//   let newStr= text.replace(/ /gi,`_`)
//     return newStr
// }


// console.log(change("Hello world !"))
// console.log(change("Hello world ! asd asf afsasf asf asfasf a"))
// console.log(change("Hello"))
///////////////////////////////////////////// Конструктор
// function User(name, age){
//     this.name = name;
//     this.age = age;
//     this.myInfo = function(){
//         console.log("My name is "+this.name+" i`m "+this.age+" years old")
//     }
// }

// let u1 = new User("Olfa", 15)
// console.log(u1.myInfo())
/////////////////////////////////////////////////// Запись конструктора по классу!!!!!! лучше записоваьб по классам!!

// class User{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     myInfo(){
//         console.log("My name is "+this.name+" i`m "+this.age+" years old")
//     }
// }

// let u2 = new User("Popo",22)
// console.log(u2)
// console.log(u2.myInfo())
/////////////////////////////////////////////////////
// let arrg=[];
// for(i=0;i<5;i++){
//     let userName= prompt("name")
//     let userAge= prompt("age")
//     arrg.push(new User(userName,userAge)) 
// }
// console.log(arrg)
//////////////
// arrg[arrg.length]=new User("Yi",11)
// console.log(arrg)

// arrg[arrg.length]=new User("Yaa",112)
// console.log(arrg)
// arrg[arrg.length]=new User("Ya2a",2)
// console.log(arrg)
// arrg.push(new User("Jj",18))
// console.log(arrg)

////////////////////////////////////



