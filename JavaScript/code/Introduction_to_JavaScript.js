// 1. first javascript code

console.log("Hello World")

// 2. Comment

// single comment

// This is single comment

/* 
   This is line 1
   Thsi is line 2
   This is line 3
   This is line 4
*/

// 3. JavaScript variables:

var Age = 24;
let name = 'Efrem';
const ID = 134234;

// 4. let, let, const

// let Example

let age = 25;
age = 30; // Valid - Reassignment
// let age = 35; // Invalid - Redefinition within the same scope not allowed.

// const Example

const PI = 3.14;
PI = 3.14159; // Invalid - Reassignment not allowed
// const PI = 3.14159; // Invalid - Redefinition within the same scope

// var  Example

var x = 5;
var x = 10; // Valid - Redeclaration within the same scope
x = 15; // Valid - Reassignment
{
var y = 20; // y is accessible here within the block
}
console.log(y); // regadless of block y can be access here also.

// 4. Data type

// Number

// This is the example of numbric data.
var num1 = 5; // +Ve int value
var num2 = -10; // -Ve int Valid
PI = 3.14 // +Ve float value
console.log(num1);
console.log(num2);
console.log(PI);


// String

// This is the example of String data.
var message = "Hello, World"; // duble quates
var greeting = 'hi every one'; // single quote.
console.log(message);
console.log(greeting);

// Boolean

var isActive= true;
var Status= false;
console.log(isActive);
console.log(Status);

// undefined

var counter;
console.log(counter);

// null

var counter = null;
console.log(counter);

// NaN

var counter = null;
console.log('a'/2);

// JavaScript operators

// 1. Arithmetic Operators:

let x = 5;
let y = 2;
console.log(x + y); // Output: 7 (addition)
console.log(x - y); // Output: 3 (subtraction)
console.log(x * y); // Output: 10 (multiplication)
console.log(x / y); // Output: 2.5 (division)
console.log(x % y); // Output: 1 (modulus)

// 2. Assignment Operators:

let a = 10;
let b = 5;
a += b; // Equivalent to: a = a + b;
console.log(a); // Output: 15
b -= 3; // Equivalent to: b = b - 3;
console.log(b); // Output: 2
let c = 2;
c *= 3; // Equivalent to: c = c * 3;
console.log(c); // Output: 6
let d = 10;d /= 5; // Equivalent to: d = d / 5;
console.log(d); // Output: 2
let e = 7;e %= 4; // Equivalent to: e = e % 4;
console.log(e); // Output: 3



// 3. Comparison Operators:

let p = 5;
let q = 3;

console.log(p == q); // Output: false (equal to)
console.log(p === q); // Output: false (equal to)
console.log(p != q); // Output: true (not equal to)
console.log(p > q); // Output: true (greater than)
console.log(p < q); // Output: false (less than)
console.log(p >= q); // Output: true (greater than or equal to)
console.log(p <= q); // Output: false (less than or equal to)


// 4. Logical Operators:

let isTrue = true;
let isFalse = false;
console.log(isTrue && isFalse); // Output: false (logical AND)
console.log(isTrue || isFalse); // Output: true (logical OR)
console.log(!isTrue); // Output: false (logical NOT)