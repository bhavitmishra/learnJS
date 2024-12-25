const user = {
    username : "Bhavit",
    age:21 ,

    welcome : function()
    {
        console.log(`${this.username} , welcome`)
    }
}

// user.welcome();


const coffee = () => {
    username = "Tera Baap"
}

// const add2val = (num1 , num2) => {
//     return num1 + num2;
// }
const add2val = (num1 , num2) => (num1 + num2) ;


console.log(add2val(1,2));