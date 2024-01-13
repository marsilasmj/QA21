// // ------------------------- Crating Array ------------------------//

// // ------------ Array crating by using litral way ------------------
    
let arrayName = ['element1', 'element2', 'element3']; //with inital value
let emptyArray1 = [];  // array with empty element
console.log(arrayName)
let data = [1, "Steve", "DC", true, 255000, 5.5]; // diff data type 
console.log(data)
// ---------------- crating array with Array ()--------------------
let emptyArray = new Array(3); // creates an array with initial size 3
let numArray = new Array(1, 2, 3); // create an array with three numbers 1,2 3
let colorArray = new Array('Red'); // creates an array with one element 'Red'
let omitNew = Array(4,7);  // with out new keyword
console.log(omitNew)

// // ------------------------- Accessing Array Elements ------------------------//


let numArr = [10, 20, 30, 40, 50];

console.log(numArr[0]); // 10
console.log(numArr[1]); // 20
console.log(numArr[2]); // 30
console.log(numArr[3]); // 40
console.log(numArr[4]); // 50

console.log(numArr.at(0)); // 10
console.log(numArr.at(1)); // 20
console.log(numArr.at(2)); // 30
console.log(numArr.at(3)); // 40
console.log(numArr.at(4)); // 50

console.log(numArr.at(-1)); // 10
console.log(numArr.at(-2)); // 20
console.log(numArr.at(-2)); // 30
console.log(numArr.at(-3)); // 40
console.log(numArr.at(-4)); // 50

// // // --------------------------- How to get array size ----------------- //
console.log(numArr.length); // 3  getting array size //

// // // --------------------------- iterate array ----------------- //

let numArray1 = [10, 20, 30, 40, 50];         // 

numArray1.forEach(i =>  console.log(i));      //by using forEach loop

for(let i=0; i<numArray1.length; i++)
  console.log(numArray[i]);                  // for loop

for(let i of numArray1)            
  console.log(i);                            // by using  for-of loop

for(let i in numArray1)      
  console.log(numArray1[i]);                  // bu using for in loop 



// // ------------------------- Array Methods ------------------------- //

// // 1. push() methods.
// // To Add an element to the end of an array

let pushExample = [1, 2, 3, 4];
pushExample.push(5);
console.log(pushExample); 

// // 2. unshift() method:
// // To Add an element to the beginning of an array

let unshiftExample = [1, 2, 3, 4];
unshiftExample.unshift(0);
console.log(unshiftExample); 


// // 3. pop() method:
// // To Remove an element from the end of an array

let popExample = [1, 2, 3, 4];
popExample.pop();
console.log(popExample); 

// // 4. shift() method:
// // To Remove an element from the beginning of an array

let shiftExample = [1, 2, 3, 4];
shiftExample.shift();
console.log(shiftExample); 

// // 5. indexOf() method:
// // Finding an index of an element in the array

let indexOfExample = [1, 2, 3, 4];
let index = indexOfExample.indexOf(2);
console.log(index); 

// // 6. includes() method:
// // To Check if a value is in array

let includesExample = [1, 2, 3, 4];
let Check = includesExample.includes(3);
console.log(Check); 

// // 7. concat() method:
// // To Merging (Concatenating) Arrays

let concatExample1 = [1, 2, 3, 4];
let concatExample2 = [5, 6, 7, 8];
let concatExample3 = concatExample1.concat(concatExample2)
console.log(concatExample3); 


// // ----------------------  Multi-Dimensional array ------------------ //

let number= [ 
    ['one', 1],
    ['two', 2],
    ['three', 3],
    ['foure', 4], 
    ['five', 5]
];
// console.table(number);


// // ---------------------- Accessing Element of Multi-Dimensional array -------------//

console.log(number[0][1]); // 1

// //Adding elements to the JavaScript multidimensional array

number.push(['Six',6]);
console.table(number);

// //Removing elements from the JavaScript multidimensional array

number.pop();
console.table(number);

number.pop();
console.table(number);

//  Remove the elements from the inner array of the multidimensional array.

number.forEach((i) => {
  i.pop();
  i.pop();
});
console.log(number);

// Iterating over elements of the JavaScript multidimensional array

// loop the outer array
for (let i = 0; i < number.length; i++) 
{
  // get the size of the inner array
  var innerArrayLength = number[i].length;
  // loop the inner array
  for (let j = 0; j < innerArrayLength; j++) {
      console.log('[' + i + ',' + j + '] = ' + number[i][j]);
  }
}


// // ---------------------  class work ---------------------------- //
// // Find max and min in array
// // sum array element 
