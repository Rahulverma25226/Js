// singleton
// object.create

// oject ltieral

const mySym = Symbol("key1");

const JsUser = {

    name : "Rahul",
    age : 18,
    [mySym] : "ShowKeyValue",
    location: "India",
    email: "infotech@gmail.com",
    lastLogin: ["Monday", "Saturday", "Sunday"],

}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "info2323@gmail.com";
// Object.freeze(JsUser); // freeze the object so that no one can change the value of the object

JsUser.greeting = function(){
    console.log("Hello Js User");
},

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());