// Find the greatest number among three numbers using conditional statements

function findGreatestOfThreeNum(a,b,c){
    if(a >= b && a >= c) {
        return `${a} is the greatest number.`;
    } else if(b >= a && b >= c) {
        return `${b} is the greatest number.`;
    } else {
        return `${c} is the greatest number.`;
    }
}

let num1 = 10;
let num2 = 20;
let num3 = 30;
console.log(findGreatestOfThreeNum(num1, num2, num3)); 

let anotherNum1 = 50;   
let anotherNum2 = 40;
let anotherNum3 = 60;
console.log(findGreatestOfThreeNum(anotherNum1, anotherNum2, anotherNum3));