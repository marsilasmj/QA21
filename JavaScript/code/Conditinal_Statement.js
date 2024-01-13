// if condition

if (4 * 4 == 16) {
  console.log("if the ondition true this will run");
}
// output:- if the ondition true this will run

// if .. else

let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
// output:- You are an adult

// if, else if, else Statement

let score = 85;
if (score >= 90) {
  console.log("Excellent");
} else if (score >= 80) {
  console.log("Good");
} else if (score >= 70) {
  console.log("Average");
} else {
  console.log("Below Average");
}

// 4 switch Statement

let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Invalid day";
    break;
}
console.log(dayName);

// 5 Ternary Operator

let age1 = 20;
let result = (age1 >= 18) ? "You are an adult" : "You are a minor";
console.log(result); // Output: "You are an adult"
