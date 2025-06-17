// check the year is a leap year or not 

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

let year1 = 2020;
let year2 = 2021;
console.log(isLeapYear(year1)); // Output: 2020 is a leap year.
console.log(isLeapYear(year2)); // Output: 2021 is not a leap year.