// Swap of two numbers using a third variable
console.log("Swapping two numbers using a third variable:");
function swap(a, b) {
    let temp;
    temp = a;
    a = b;
    b = temp;
    return [a, b];
}

// Example usage:
console.log(swap(5, 10)); // Output: [10, 5]

// swap of two numbers without using a third variable

console.log("Swapping two numbers without using a third variable:");
function swapWithoutTemp(a, b) {
    a = a + b; // Step 1: Add both numbers
    b = a - b; // Step 2: Subtract the new value of a from b
    a = a - b; // Step 3: Subtract the new value of b from a
    return [a, b];
}

// Example usage:
console.log(swapWithoutTemp(5, 10)); // Output: [10, 5]

// swap of two numbers using array destructuring
console.log("Swapping two numbers using array destructuring:");
function swapWithDestructuring(a, b) {
    [a, b] = [b, a]; // Swap using array destructuring
    return [a, b];
}

// Example usage:
console.log(swapWithDestructuring(5, 10)); // Output: [10, 5]

// swap of two numbers using bitwise XOR
console.log("Swapping two numbers using bitwise XOR:");
function swapWithXOR(a, b) {
    a = a ^ b; // Step 1: XOR both numbers
    b = a ^ b; // Step 2: XOR the new value of a with b
    a = a ^ b; // Step 3: XOR the new value of b with a
    return [a, b];
}

// Example usage:
console.log(swapWithXOR(5, 10)); // Output: [10, 5] 