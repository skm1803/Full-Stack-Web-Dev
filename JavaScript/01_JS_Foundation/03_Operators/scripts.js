// Airthmetic Operators

console.log(`Addition Operator ${5 + 3}`);
console.log(`Subtraction Operator ${5 - 3}`);
console.log(`Multiplication Operator ${5 * 3}`);
console.log(`Division Operator ${5 / 3}`);
console.log(`Modulus Operator ${5 % 2}`);
console.log(`Increment Operator ${++5}`);
console.log(`Decrement Operator ${--5}`);

//Assignment Operators

let x = 5;
console.log(`Assignment Operator ${x = 10}`);
console.log(`Add Assignment Operator ${x += 5}`);
console.log(`Subtraction Assignment Operator ${x -= 5}`);
console.log(`Multiplication Assignment Operator ${x *= 5}`);
console.log(`Division Assignment Operator ${x /= 5}`);
console.log(`Modulus Assignment Operator ${x %= 5}`);

//Comparison Operators

console.log(`Equal to Operator ${5 == 5}`); 
console.log(`Not Equal to Operator ${5 != 5}`);
console.log(`Strict Equal to Operator ${5 === 5}`);
console.log(`Strict Not Equal to Operator ${5 !== 5}`);
console.log(`Greater than Operator ${5 > 3}`);
console.log(`Less than Operator ${5 < 3}`);
console.log(`Greater than or equal to Operator ${5 >= 5}`);
console.log(`Less than or equal to Operator ${5 <= 5}`);

//Logical Operators

console.log(`Logical AND Operator ${true && false}`);
console.log(`Logical OR Operator ${true || false}`);
console.log(`Logical NOT Operator ${!true}`);

//Bitwise Operators

console.log(`Bitwise AND Operator ${5 & 3}`);
console.log(`Bitwise OR Operator ${5 | 3}`);
console.log(`Bitwise XOR Operator ${5 ^ 3}`);
console.log(`Bitwise NOT Operator ${~5}`);  

//Ternary Operator

let age = 18;
let message = (age >= 18) ? "You are an adult" : "You are a minor";
console.log(message);

//Nullish Coalescing Operator

let name = null;
let greeting = name ?? "Guest";
console.log(greeting);