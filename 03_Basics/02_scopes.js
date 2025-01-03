let a = 300;
if(true)
{
    let a = 69;
    // console.log("Inner a = " , a);
}

// console.log("Outer a = " , a);


function one() {

    const username = "Bhavit";

    function two(){
        const website = "mishras";
        console.log(username);
        console.log(website);
        
    }
    two();
}
// one();

// ++++++++++++++++++  interesting +++++++++++++++++++++++

addone(5);
function addone(num) {return num+1;}

addtwo(5);
const addtwo = function(num){return num+2;}


let vx  = 5