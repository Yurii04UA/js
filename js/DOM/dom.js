// document.getElementById()
// document.getElementsByClassName()

// document.getElementById("test").innerHTML = "New value";  // . innereHTML -заменяет содержимое 

let x = document.getElementsByClassName("firstThreeEl");
console.log(x)
document.getElementById("intro").innerHTML = "new text with (index0) :" + x[0].innerHTML;
