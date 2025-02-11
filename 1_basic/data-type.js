// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Reference (Non primitive)

// Array, Object, Function

// Stack (Primitive), Heap (Non-Primitive) Memory

let myYoutubename = "rahulvermatubename"

let anotherName = myYoutubename
anotherName = "rahulverma"

console.log(myYoutubename);
console.log(anotherName)

// Reference (Heap) Memory

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "usershow@google.com"

console.log(userOne.email);
console.log(userTwo.email);