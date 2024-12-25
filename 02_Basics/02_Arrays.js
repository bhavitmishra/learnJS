const marvel = ["SpiderMan" , "IronMan" , "Thor"];
const dc = ["BatMan" , "superMan" , "WonderWoman"];

// marvel.push(dc);
// console.log(marvel);

// let arr = marvel.concat(dc);
// console.log(arr);

const allheroes = [...marvel , ...dc];
const allheros = [...dc , ...marvel];
console.log(allheroes);
console.log(allheros);
console.log(marvel);
console.log(dc);


console.log(Array.isArray("Bhavit"));
console.log(Array.from("Bhavit"));

let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1,s2,s3));
