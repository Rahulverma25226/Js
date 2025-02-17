// array 

const myArray = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];

const myArray2 = new Array(1, 2, 3, 4, 5);
// console.log(myArray[1]);

// Array methods

myArray.push(6); // add element at last
// console.log(myArray);

myArray.pop() // remove the last element
// console.log(myArray)

myArray.unshift(8) // add element at first
// console.log(myArray);

myArray.shift() // remove the first element
// console.log(myArray);

// console.log(myArray.includes(9)) // check the element is present
// console.log(myArray.indexOf(4)) // check the index of the element

const newArray = myArray.join() // convert array to string
// console.log(newArray)
// console.log(typeof newArray)

// slice, splice

console.log("A ", myArray);
const myn1 = myArray.slice(1, 3);

console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1, 3)
console.log("C ", myArray);
console.log(myn2);