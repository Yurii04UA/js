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
// let btn = document.querySelector(".fuck")
// let startTime = new Date().getTime()
// let square = document.querySelector(".square");
// function generateRandomColor(){
// let randomColor = "#"+(Math.floor(Math.random()*16777215).toString(16));
//     return randomColor;
// }
// let makeSquareVisible = function(){
//     square.style.display = "block"
//     startTime = new Date().getTime()
//     square.style.top = (Math.random()*400 )+"px"
//     square.style.left = (Math.random()*700 )+"px"
//     square.style.width = (Math.random()*300+50)+"px"
//     square.style.height = (Math.random()*300+50)+"px"
//         if (Math.random() < 0.3){
//             square.style.borderRadius = "50%"
//             square.style.background = generateRandomColor()
//             square.style.borderBottom = "0"
//         }else if ((Math.random() >= 0.3) && (Math.random() <= 0.7)){
//             square.style.borderRadius = "0%"
//             square.style.background = generateRandomColor()
//             square.style.borderBottom = "0"
//         }else {
//             square.style.width = "0px"
//             square.style.height = "0px"
//             square.style.borderLeft = "50px solid transparent"
//             square.style.borderRight = "50px solid transparent"
//             square.style.borderBottom = "100px solid "+ generateRandomColor()
//             square.style.background = "transparent"
//         }
// }

//     square.addEventListener("click", function () {
//     square.style.display = "none"
    

//     let endTime = new Date().getTime()
//     let finishTime = (endTime - startTime)/1000
//     let reactionTime = document.querySelector(".reactionTime").innerHTML = finishTime + " seconds";
//     setTimeout(makeSquareVisible, Math.random()*3000)
    
// })
// btn.addEventListener("click", function () {
//     setTimeout(makeSquareVisible, Math.random()*3000)
//     btn.style.display = "none"
// })

// console.log("#"+(Math.floor(Math.random()*16777215).toString(16)))




//////////////////////// <---- асинхронность


// console.log('start');
// console.log('start 2');


// setTimeout(function(){
//     console.log('Inside timout 2 sec');
// },0);

// console.log('end');

// console.log('Request data...');
// setTimeout(()=>{
//     console.log('Preparing data...')

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() =>{
//         backendData.modified = true
//         console.log('Data received', backendData)

//         setTimeout(()=>{
//             console.log('pisyn')
//         },2000)
//     },2000)
// },2000);


///////// promises <-------------

// const p = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('Preparing data...')

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//     resolve(backendData) // передаем значние в Р и получаем ее через  p.then
//     },2000)

// })

// p.then(data =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             data.modif = true
//             reject(data)
//         },2000)
//     })
// //  p2.then(clientData => {
// //         console.log('Data recevied', clientData)
// //  })
// }).then(clientData => {
//     console.log('Data recevied', clientData)
// })
// .catch(err => console.error('Error: ',err))/// методом .catch(err => console.error('Error: ',err))  ловим ошибки (для примера заменить resolve на reject)
// .finally(() => console.log('Finally'))  /// будет выводить даже если есть ошибка




// const b = fetch('https://jsonplaceholder.typicode.com/users')
// .then(response =>  response.json())
// .then(data => console.log(data))


const url = 'https://jsonplaceholder.typicode.com/users';

function getUsers (url) {
  return fetch(url)
    .then(response => response.json())
    .then(json => renderData(json))
    .catch(err => console.error('Error: '+ err))
};

 const renderData = data => {
   const array = []
   data.forEach(el => {
     array.push(el)
   });
    console.log(array)
 };

 const a = getUsers(url);

 console.log(a);



  

    
 

  
  
     

  
  
