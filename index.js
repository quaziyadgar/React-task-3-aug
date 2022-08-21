// Write a function to swap two numbers. without third variable (a, b) -> fn -> (b, a)

let a = 5;
let b = 10;

console.log(a,b);
const swap = _ =>{
    let temp = a;
    a = b;
    b = temp;
}
swap();
console.log(a,b);



// Write a function to generate random string. This function takes in the length as a parameter and then returns a random string of that length. "a-z"; 5 -> fn -> hebak 5 -> fn -> psanv

const l = parseInt(prompt("Enter the length of a string"));

randomString(l);

function randomString(len)
{
    let s = "";
    for(let i = 0 ; i< len; i++)
    {
        let random = Math.random();
        random = random * 26 + 97;
        const rand_idx = Math.floor(random);
        s = s + String.fromCharCode(rand_idx);
    }
    console.log(s);
}