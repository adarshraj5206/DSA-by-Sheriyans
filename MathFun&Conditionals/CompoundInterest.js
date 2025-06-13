// Compound Interest Calculation
function calculateCompoundInterest(principal, rate, time) {
    let amount = principal * Math.pow((1 + rate / 100), time);
    let interest = amount - principal;
    return { amount, interest };
}

// Example usage:
let principal = 1000;
let rate = 5;
let time = 2;
let result = calculateCompoundInterest(principal, rate, time);
console.log("Total Amount: " + result.amount);
console.log("Compound Interest: " + result.interest);
// Output:
// Total Amount: 1102.5