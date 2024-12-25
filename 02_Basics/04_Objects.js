//const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123qax";
tinderUser.name = "sigma69";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regUser = {
    email: "aesthetic_Ka_choda@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Bhavit",
            lastname : "Mishra",
        }
    }
};

// console.log(regUser.fullname.userfullname.firstname)

const obj1 = {
    1:"a", 
    2:"b"
}

const obj2 = {
    3:"a",
    4:"b"
}

// const obj3 = Object.assign({} ,obj1 , obj2);
const obj3 = {...obj1 , ...obj2}
// console.log(obj3);

const users = [
    {
        id:"12ab",
        email:"abc@gmail.com"
    },
    {
        id:"12ab",
        email:"abc@gmail.com"
    },
    {
        id:"12ab",
        email:"abc@gmail.com"
    },
    {
        id:"12ab",
        email:"abc@gmail.com"
    }
]

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    cname:"Js with me",
    price:"Free",
    Instuctor:"Mishra"
}

const {Instuctor} = course

console.log(Instuctor);

