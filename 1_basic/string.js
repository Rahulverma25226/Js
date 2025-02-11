const name = "Rahul"
const repoCount = 100

// console.log (name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rahul');
const gameshow = new String('rahul-top-games');

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const newString1 = gameName.slice(-4, 2)
// console.log(newString1);

// const newString2 = "   rahul   "
// console.log(newString2);
// console.log(newString2.trim());

const url = "https://rahul.com/rahul%20verma"
console.log(url.replace('%20','-'));

console.log(url.includes('rahul'));

console.log(gameshow.split('-'));