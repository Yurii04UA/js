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

// console.log(factorial(0))
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


// New education////////////////
// function printText (){
//     console.log("Hello to everyone!")
// };


// printText();
// function colorizer (item , color){
//      console.log(`name item : ${item}, color the item : ${color}`);
//      const colorizerItem = `The ${item} is ${color}`
//      console.log(colorizerItem)
// };

// colorizer(`desk`, `pink`)

// ////// fuction: Declaration and Expression
// function sayHello (){  ////////  Declaration function (Может вызываться до ее определения)
//     alert("Hello")
// };


// let sayHello1 = function(){  //////// Expression function (может вызываться только когда загрузится(дойдет очередь))
//     alert("Hello")           //// эта функция часть выражения
// }

// function getAge1 (birthYear, yearNow){  <--- /////////// declaration function
//     // const age = yearNow - birthYear
//     // return age
//     return yearNow - birthYear
// };

// const myAge = getAge1(1992,2022);
// console.log(myAge);
// console.log(getAge1(1996,2022));

// let getAge2 = function(birthYear,yearNow){  <--- //// Expression function (функция часть выражения)
//     return yearNow - birthYear
// };
// const myAge = getAge2(2000,2022);
// console.log(myAge);
// console.log(getAge2(2000,2022));
//////////////////////////////////////////
// function ask(question,yes,no){
//     if(confirm(question)){
//         yes()
//     } else {
//         no()
//     }
// };

// function showOk (){
//     alert("Okey")
// };

// function showCancel(){
//     alert("You cancel")
// }

// ask("You debil?", showOk, showCancel)

//////////////////// Arrow function
// let getAge2 = function(birthYear,yearNow){   ////<--- Expression function (функция часть выражения) обязательно указывать явное возвращенное значение(return)
//         return yearNow - birthYear
//     };
//     const myAge2 = getAge2(1992,2022);
//     console.log(myAge2);


// const getAgeArray = (birthYear,yearNow)=>   ///<--- При использовании стрелочной функции не нужно указывать {} и return(значение возвращается автоматически)
//     yearNow-birthYear;
// // console.log(yearNow - birthYear) ;
// const myAgeArray = getAgeArray(2001,2022)
// // getAgeArray(2020,2022);
// console.log(getAgeArray(2000,2020))
// console.log(myAgeArray)

// let canBuyAlcohol = (birthYear,yearNow) => {
//     const age = yearNow - birthYear;
//     if (age>21){
//         return console.log("Yes,you can buy the alcohol"), 
//         console.log(age);
//     }else{
//         return console.log("No,you can not buy the alcohol, you is too young"),
//         console.log(age);
//     }
// };

// canBuyAlcohol(1992,2022);
// canBuyAlcohol(2010,2022);

// let canBuyAlcohol = (birthYear,yearNow) =>{
//     const age = yearNow - birthYear;
//     const isPersenOlderThan21 = age >21 ? "Yes,you can buy the ALCOHOL." : "No,you can not buy the ALCOHOL,you is too young.";
//     return isPersenOlderThan21
// };

// console.log(canBuyAlcohol(2014,2022));

/////////////////////////////// functions in the function
// function colorMixed (colorOne,colorTwo){
//     const newColor = `${colorOne} with ${colorTwo}`;
//     return newColor;
// }


// function colorizer (item,color1,color2){
//     const color = colorMixed(color1,color2)
//     const colorizerItem = `The ${item} is ${color}.`;
//     return colorizerItem;
// };

// const colorCar = colorizer("Ford", "blue", "white");
// console.log(colorCar);

// console.log(colorizer("house", "black", "orange"));

/////////////////////////////////// 
// const getAverageQuarter = (firstMonth,secondMonth,thirdMonth) => 
//     Math.round((firstMonth + secondMonth + thirdMonth) / 3);
//     // first quarter
//     const averSalesDeptOneFirstQuarter = getAverageQuarter(35467,29842,38501);
//     const averSalesDeptTwoFirstQuarter = getAverageQuarter(70533,50121,33899);

//     console.log(averSalesDeptOneFirstQuarter,averSalesDeptTwoFirstQuarter);
       
//     // second quarter
//     const averSalesDeptOneSecondQuarter = getAverageQuarter(50301,21984,19207);
//     const averSalesDeptTwoSecondQuarter = getAverageQuarter(72381,41562,29465);

//     console.log(averSalesDeptOneSecondQuarter,averSalesDeptTwoSecondQuarter);
    


//     const averSalesDeptOneFirstQuarterFix = getAverageQuarter(115467,9842,38501); /// искуственно уменьшил разницу что бы увидеть другой код


// function printBonus(averSalesDept1,averSalesDept2){
//     if (averSalesDept1 < averSalesDept2){
//         const difference = averSalesDept2 - averSalesDept1 ;
//         const averSalesMoreOn = Math.round((difference / averSalesDept2)*100);
//         let results
//         if(averSalesMoreOn>30){
//             console.log( `Department two you have a bonus of ${averSalesMoreOn} % this quarter.`),
//             console.log(averSalesMoreOn);    
//         }else{
//             console.log( `Department two you have no bonus this quarter`),
//             console.log(averSalesMoreOn); 
//         }
        

//     }else if (averSalesDept1 > averSalesDept2){
//         const difference = averSalesDept1 - averSalesDept2 ;
//         const averSalesMoreOn = Math.round((difference / averSalesDept1)*100);
//         if(averSalesMoreOn>30){
//             console.log(`Department one you have a bonus of ${averSalesMoreOn} % this quarter.` ),
//             console.log(averSalesMoreOn);
//         }else{
//             console.log(`Department one you have no bonus this quarter`),
//             console.log(averSalesMoreOn);
//         }
//     } else{
//         console.log("Great, you have a draw")
//     }
// }
// //// убрали if statmane добавив еще одно сравнение в первый ИФ
// function printBonus1(averSalesDept1,averSalesDept2){
//     if (averSalesDept1 < averSalesDept2 && averSalesDept2 > (1.3 *averSalesDept1)){
//         const difference = averSalesDept2 - averSalesDept1 ;
//         const averSalesMoreOn = Math.round((difference / averSalesDept2)*100);
        
//             console.log( `Department two you have a bonus of ${averSalesMoreOn} % this quarter.`),
//             console.log(averSalesMoreOn);    
        
        

//     }else if (averSalesDept1 > averSalesDept2 && averSalesDept1> (1.3 * averSalesDept2)){
//         const difference = averSalesDept1 - averSalesDept2 ;
//         const averSalesMoreOn = Math.round((difference / averSalesDept1)*100);
        
//             console.log(`Department one you have a bonus of ${averSalesMoreOn} % this quarter.` ),
//             console.log(averSalesMoreOn);
       
//     } else{
//         console.log("No bonus this quarter")
//     }
// }




// const bonusFirstQuarter = printBonus(averSalesDeptOneFirstQuarter,averSalesDeptTwoFirstQuarter);
// const bonusTwoQuarter = printBonus(averSalesDeptOneSecondQuarter,averSalesDeptTwoSecondQuarter);

// const bonusFirstQuarterFix = printBonus(averSalesDeptOneFirstQuarterFix,averSalesDeptTwoFirstQuarter);

// const bonusFirstQuarter1 = printBonus1(averSalesDeptOneFirstQuarter,averSalesDeptTwoFirstQuarter);
// const bonusTwoQuarter1 = printBonus1(averSalesDeptOneSecondQuarter,averSalesDeptTwoSecondQuarter);

