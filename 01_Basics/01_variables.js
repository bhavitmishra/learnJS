const accountId = 144553
let accountEmail = "bhavitmishra@gmail.com"
var accountPassword = "12345"
accountCity = "Sagar"
let accountState;
// accountId = "12" not allowed


/*
1. prefer let over var because var have scoping problem
*/
accountEmail = "bm@123"
accountPassword = "12"
accountCity = "rcb"
console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);
