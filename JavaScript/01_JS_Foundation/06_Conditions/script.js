//Conditions

//If Statement
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}

//If-Else Statement
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// If-Else-If Statement
if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a minor.");
}

//Ternary Operator
let result = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(result);

//Switch Statement
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  default:
    console.log("Invalid day.");
}

//Logical Operators in Conditions &&, ||, !

let isAdult = true;
let isCitizen = true;

if (isAdult && isCitizen) {
  console.log("You are an adult citizen.");
} else if (isAdult || isCitizen) {
  console.log("You are either an adult or a citizen.");
} else {
  console.log("You are neither an adult nor a citizen.");
}
