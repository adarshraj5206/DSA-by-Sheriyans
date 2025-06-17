// check the number is odd or even

function checkOddEven(num) {
    if (num % 2 === 0) {
        return `${num} is an even number.`;
    } else {
        return `${num} is an odd number.`;
    }
}


let number = 7; 
console.log(checkOddEven(number)); // Output: 7 is an odd number.
let anotherNumber = 10; 
console.log(checkOddEven(anotherNumber)); // Output: 10 is an even number.