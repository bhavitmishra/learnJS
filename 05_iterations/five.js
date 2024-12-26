// FOR EACH VALUES RETURN NHI KRTA


// filter jo hai wo true and false wala game hai
 let nums = [1,2,3,4,5,6,7,8,9,10];

// for (let key in nums) {
//     nums[key]+=10;
// }
// console.log(nums);


//arr.map
// tip jb bhi values k saath ched chaad karo use map , iterations k liye loops use krlena
// const newnums = nums.map( (i)=> i+=10);
// console.log(newnums);

const newnums = nums.map( (i) => i*10).map( (j) => j+1).filter((i) => i >= 40);
console.log(newnums);

