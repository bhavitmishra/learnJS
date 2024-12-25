function saymyname(){
    console.log("Bhavit");
    console.log("Mishra");
    console.log("is Great");
    
}

// saymyname();
// saymyname();
// saymyname();


// function adder(num1 , num2){
// console.log(num1+num2);
// }

function adder(num1 , num2)
{
    return num1 + num2;
}

// let j = 8
// for(let i = 0 ; i<4 ; i++)
// {
//     adder(i , j);
//     j++;
// }

function loginUserMessage(username = "ran")
{
    if(username) return `${username} just logged in`;
    return "Nobody Logged in";
}

// let message = loginUserMessage("Bhavit");
// console.log(message);

// console.log(loginUserMessage("fre"));


// c++ ka gyaan merge kr diya 😂😂

function cartsum(arr){
    let sum = 0;
    for(let i = 0 ; i < 4 ; i++)
    {
        sum+=arr[i];
    }
    console.log(sum);
} 

const cart = [
    {
        itemname:"shit",
        price:131
    }
    ,
    {
        itemname:"shit",
        price:131
    }
    ,
    {
        itemname:"shit",
        price:131
    }
    ,
    {
        itemname:"shit",
        price:131
    }
]

let arr = []

for(let i = 0; i < 4 ; i++)
{
    arr.push(cart[i].price);
}

cartsum(arr);

