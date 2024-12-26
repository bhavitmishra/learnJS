// objects me loops aaise chalayenge
const lang = {
    cpp : "c++",
    js:"javascript",
    py:"python",
    rb:"ruby"
}

// for in loop isi ko kehte hai

for(const keys in lang)
    {
        console.log(`${keys} is key for value -> ${lang[keys]}`);   
    }

    let arr = [1,2,3,4,"batman"];

    for(const x in arr)
    {
        console.log(arr[x]);
        
    }
