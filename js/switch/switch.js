//  if else

let age = 32;
let groupNumber;

if (age >= 18 && age <=26){
    groupNumber = 1;
}else if(age > 26 && age <= 46){
    groupNumber = 2;
} else{
    groupNumber = 3;
}

console.log(groupNumber);

// switch

switch(true){
    case age >= 18 && age <= 26:
        groupNumber = 1;
        break;
    case age > 26 && age <=46 :
        groupNumber = 2;
        break;
    default :
        groupNumber = 3;
}

console.log(groupNumber);

// switch делает те же функии что и if else(кому как удобнее)

let education = "html"

switch(education){
    case "css" :
        console.log("Yes you study css");
        break;
    case "javascript" :
        console.log("Yes you study JS")
        break;
    case "html" :
        console.log("Yes you study html")
        break;
    default :
        console.log("You study somefing")
}
