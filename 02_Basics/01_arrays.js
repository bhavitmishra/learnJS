// Arrays

const myArr = [0,1,2,3,4,5];

const supes = ["Homelander" , "Deep" , "Maeve"];

const Numbers = new Array(69 , 5, 420 , 7);

// console.log(Numbers);

// Array Methods

// myArr.push("Mishra");

// console.log(myArr);

// myArr.pop();

myArr.unshift(1);
myArr.shift();
// console.log(myArr);

const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

// slice , splice

console.log("A " , myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B " , myArr);

const myn2 = myArr.splice(1,3);

console.log(myn2);
console.log("C " , myArr);
