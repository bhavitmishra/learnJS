// # primitive 


// 7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt



// ye sb pdh chuke hai ---^

// Reference (non primitive)

// array , objects , functions


// Arrays :

const heroes = ["Optimus" , "PIkachu" , "FourArms"];


// objects

let myObj = {
    name: "Bhavit" , 
    age: 21
}

const myFunction = function(){
    console.log("This is My Function");
    
}

// Stack(Primitive)   , Heap(Non-Primitive)


let myName = "Bhavit";
let nname = myName;

nname = "mishra"

console.log(myName);
console.log(nname);

let obj1 = {
    Name: "Bhavit", 
    nname: "cutie"
};

let obj2 = obj1;
obj2.nname = "cutie_pie";

console.table([obj1 , obj2]);

// iska matlb original nname bhi changhe hogya , mtlb by reference passed tha

