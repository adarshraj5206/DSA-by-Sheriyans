// Area of triangle using Heron's formula
console.log("Calculating the area of a triangle using Heron's formula:");
function areaOfTriangle(a, b, c) {
    // Check if the sides can form a triangle
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
        return "Invalid triangle sides";
    }
    
    // Calculate the semi-perimeter
    let s = (a + b + c) / 2;
    
    // Calculate the area using Heron's formula
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
    return area;
}

console.log(areaOfTriangle(3, 4, 5)); // Output: 6