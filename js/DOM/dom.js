// document.getElementById()
// document.getElementsByClassName()

// document.getElementById("test").innerHTML = "New value";  // . innereHTML -заменяет содержимое 

// let x = document.getElementsByClassName("firstThreeEl");
// console.log(x)
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
let h1 = document.querySelector(".h1");
h1.addEventListener("click",function(){
    h1.style.color = "pink"
})
h1.addEventListener("click",function(){
    h1.style.background = "black"
})

let liElem = document.getElementsByTagName("li");
for(i=0;i<liElem.length;i++){
    liElem[i].addEventListener("click",function(){
        this.style.color = "green"
    })
}

