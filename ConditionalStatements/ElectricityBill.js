
// ⚡ Calculate Electricity Bill Based on Units Consumed

// Write a program that takes the number of electricity units consumed as input and calculates the final electricity bill based on the following conditions:

// 💡 Slab Rates

// | Unit Range    | Price per Unit |
// | ------------- | -------------- |
// | up to 100     | Rs. 4.2/unit   |
// | 101 - 200     | Rs. 6/unit     |
// | 201 - 400     | Rs. 8/unit     |
// | more than 400 | Rs. 13/unit    |

function calculateElectricityBill(unitsConsumed) {
    let billAmount = 0;

    if (unitsConsumed > 400) {
       billAmount = (100 * 4.2) + (100 * 6) + (200 * 8) + ((unitsConsumed - 400) * 13);
    }else if (unitsConsumed > 200) {
       billAmount = (100 * 4.2) + (100 * 6) + ((unitsConsumed - 200) * 8);
    } else if (unitsConsumed > 100) {
       billAmount = (100 * 4.2) + ((unitsConsumed - 100) * 6);
    }else {
       billAmount = unitsConsumed * 4.2; // For units up to 100
    }

    return billAmount;
}


// Example usage:
let units1 = 50; // Example for 50 units
let bill1 = calculateElectricityBill(units1);
console.log(`Electricity bill for ${units1} units: Rs. ${bill1.toFixed(2)}`); // Output: Rs. 210.00

let units2 = 150; // Example for 150 units
let bill2 = calculateElectricityBill(units2);
console.log(`Electricity bill for ${units2} units: Rs. ${bill2.toFixed(2)}`); // Output: Rs. 660.00

let units3 = 250; // Example for 250 units
let bill3 = calculateElectricityBill(units3);
console.log(`Electricity bill for ${units3} units: Rs. ${bill3.toFixed(2)}`); // Output: Rs. 1460.00

let units4 = 450; // Example for 450 units
let bill4 = calculateElectricityBill(units4);
console.log(`Electricity bill for ${units4} units: Rs. ${bill4.toFixed(2)}`); // Output: Rs. 2920.00