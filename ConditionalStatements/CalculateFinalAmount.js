// Write a program that takes an initial amount as input and calculates the final amount after applying a flat discount based on the following conditions:

// Amount	   ->   Discount
// 0 - 5000	   ->      0%
// 5001 - 7000	->      5%
// 7001 - 9000	->      10%
// More than 9000	->      20%

function calculateFinalAmount(initialAmount) {
    let discount = 0;

    if (initialAmount > 9000) {
        discount = 0.20; // 20% discount
    } else if (initialAmount > 7000) {
        discount = 0.10; // 10% discount
    } else if (initialAmount > 5000) {
        discount = 0.05; // 5% discount
    } // No discount for amounts 5000 or less

    let finalAmount = initialAmount - (initialAmount * discount);
    return finalAmount;
}

// Example usage:
let amount1 = 4500;
let finalAmount1 = calculateFinalAmount(amount1);
console.log(`Final amount for ${amount1} is ${finalAmount1}`);

let amount2 = 6000;
let finalAmount2 = calculateFinalAmount(amount2);
console.log(`Final amount for ${amount2} is ${finalAmount2}`);

let amount3 = 8000;
let finalAmount3 = calculateFinalAmount(amount3);
console.log(`Final amount for ${amount3} is ${finalAmount3}`);