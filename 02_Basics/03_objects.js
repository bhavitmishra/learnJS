//singleton
//Object.create


//object literals

mySym = Symbol("keys");

const JsUser = {
    name:"Bhavit" ,
    [mySym]: "mkeys",
    "full name" : "Bhavit Mishra", 
    age:21 , 
    location: "Indore",
    email: "bhavitmishra@gmail.com",
    isLoggedIn: false,
    lastlogindays: ["Monday" , "Saturday"]
};

// console.log(JsUser.name);

// // Niche waala tarika symbol data type waali keys ko access krne me bhi help krta hai!!!
// console.log(JsUser["full name"]);
// console.log(JsUser.email);

JsUser.location = "United States of America";

// Object.freeze(JsUser);

JsUser.location = "Japan";
// console.log(JsUser);

JsUser.bark = function() {
    console.log("Hello NOOBIe");
    
}

JsUser.bark2 = function() {
    console.log(`Hello son , I am ${this.name}, I have fathered you for ${this.age} years`);
}                         
console.log(JsUser.bark());
console.log(JsUser.bark2());