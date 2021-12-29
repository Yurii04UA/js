// document.getElementById()
// document.getElementsByClassName()

// document.getElementById("test").innerHTML = "New value";  // . innereHTML -заменяет содержимое 

// let x = document.getElementsByClassName("firstThreeEl");
// console.log(x)
// document.getElementById("intro").innerHTML = "new text with (index0) :" + x[0].innerHTML;


/////////////////////
// изменение стилей с помошью js    
let a = document.querySelector("#thridElem");
console.log(a.innerHTML)
a.style.color = "red";
a.style.fontSize = "55px";
a.style.background = "yellow"