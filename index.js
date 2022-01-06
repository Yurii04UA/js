// const x = document.querySelector(".fuck")

// x.addEventListener("click", function(){
//     console.log("Pii")
// })



/*
// Types date
1.number 
2,12,-2,3.15
2.String
let a = "String"
let b = "5"
3.Boolean
true,false
4.bigl очень большие числа
5.null - пусто нечего нет
6.undefined - еще не назначено
7. obj
8.Symbol


Условыне опереторы сравнения
if else
switch

Loops

for
while
*/

/////////////////////////////////////

// `use script`
// console.log(a)
// var a = "a";
// function b(){
//     console.log(a);
//    var a = "a1";
//     console.log(a)
// }
// b()


// console.log(q)
// let q = "q1";
// function w (){
//     console.log(q)
//     q = "q1"
//     console.log(q)
// }
///////////////////////////////////////////

// `use script`
// console.log(a)
// var a = "a";
// var as = "sd";
// function b(){
//     console.log(a);  //если отставить "а" будет андефаинд если "ас" то выведет 
//    var a = "a1";
//     console.log(a)
// }
// b()
//  
let btn = document.querySelector(".fuck")
let startTime = new Date().getTime()
let square = document.querySelector(".square");
function generateRandomColor(){
let randomColor = "#"+(Math.floor(Math.random()*16777215).toString(16));
    return randomColor;
}
let makeSquareVisible = function(){
    square.style.display = "block"
    startTime = new Date().getTime()
    square.style.top = (Math.random()*400 )+"px"
    square.style.left = (Math.random()*700 )+"px"
    square.style.width = (Math.random()*300+50)+"px"
    square.style.height = (Math.random()*300+50)+"px"
        if (Math.random() < 0.3){
            square.style.borderRadius = "50%"
            square.style.background = generateRandomColor()
            square.style.borderBottom = "0"
        }else if ((Math.random() >= 0.3) && (Math.random() <= 0.7)){
            square.style.borderRadius = "0%"
            square.style.background = generateRandomColor()
            square.style.borderBottom = "0"
        }else {
            square.style.width = "0px"
            square.style.height = "0px"
            square.style.borderLeft = "50px solid transparent"
            square.style.borderRight = "50px solid transparent"
            square.style.borderBottom = "100px solid "+ generateRandomColor()
            square.style.background = "transparent"
        }
}

    square.addEventListener("click", function () {
    square.style.display = "none"
    

    let endTime = new Date().getTime()
    let finishTime = (endTime - startTime)/1000
    let reactionTime = document.querySelector(".reactionTime").innerHTML = finishTime + " seconds";
    setTimeout(makeSquareVisible, Math.random()*3000)
    
})
btn.addEventListener("click", function () {
    setTimeout(makeSquareVisible, Math.random()*3000)
    btn.style.display = "none"
})

console.log("#"+(Math.floor(Math.random()*16777215).toString(16)))


