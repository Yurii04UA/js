// document.getElementById()  -ищет по айди
// document.getElementsByClassName() -ищет все элем с таким классом 
// document.getElementsByTagName() -ищет по тегам(найдет все <p>)
// document.querySelector() - ищет первое совпадение по классу (".class") по айди("#id") по тегу ("tag")
// document.querySelectorAll() - ищет все совпадения по классу (".class") по айди("#id") по тегу ("tag")

// document.getElementById("test").innerHTML = "New value";  // . innereHTML -заменяет содержимое 

// let x = document.getElementsByClassName("firstThreeEl");
// console.log(x)

// document.getElementById("intro").innerHTML = "new text with (index0) :" + x[0].innerHTML;

// let a = document.getElementsByTagName("p") 
// console.log(a)

// document.getElementById("intro1").innerHTML = 'Some text + first paragraph ' + a[0].innerHTML

// let x = document.querySelector(".firstThreeEl").innerHTML;
// console.log(x);

// let a = document.querySelectorAll(".firstThreeEl")

// console.log(a[2].innerHTML)

// let li3 = document.querySelector("#thirdElem");

// li3.style.color = "pink";
// li3.style.color = "pink";
// li3.style.fontSize = "44px";
// document.getElementById("intro").innerHTML = "new text with (index0) :" + x[0].innerHTML;


/////////////////////
// изменение стилей с помошью js    
// let a = document.querySelector("#thridElem");
// console.log(a.innerHTML)
// a.style.color = "red";
// a.style.fontSize = "55px";
// a.style.background = "yellow"

// const fuck = document.querySelector(".fuck");
// console.log(fuck)
// fuck.classList.add("style")
//////////////////////////////////////////////////
// поменять сожержимое атрибута

// let img = document.querySelector(".img1");
// img.getAttribute("src")
// img.setAttribute("src","././../../images/img2.jpg")

// let link = document.querySelector(".link");
// link.setAttribute("href","https://www.youtube.com")
// //////////////////////////////
// EVENT
// let h1 = document.querySelector(".h1");
// h1.addEventListener("click",function(){
//     h1.style.color = "pink"
// })
// h1.addEventListener("click",function(){
//     h1.style.background = "black"
// })

// let liElem = document.getElementsByTagName("li");
// for(i=0;i<liElem.length;i++){
//     liElem[i].addEventListener("click",function(){
//         this.style.color = "green"
//     })
// }


// let btn = document.querySelector(".fuck");
// let body = document.querySelector("body");
// isBackgroundColor = false;
// btn.addEventListener("click", function(){
//     if (isBackgroundColor===false){
//         body.style.background = "blue"
//         isBackgroundColor =true
//     }else{
//         body.style.background = "white"
//         isBackgroundColor =false
//     }
       
// })
