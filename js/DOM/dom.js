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

let li3 = document.querySelector("#thirdElem");

li3.style.color = "pink";
li3.style.color = "pink";
li3.style.fontSize = "44px";
