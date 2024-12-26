const nums = [1,2,3,4];

// let arr = nums.reduce((prev , curr) =>{return prev +curr},0)
// console.log(arr);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const tot = shoppingCart.reduce(  (prev , curr) => {
    return prev + curr.price
}, 0);
console.log(tot);
