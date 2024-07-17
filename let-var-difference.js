console.log(a); // undefined

doSomthing();

function doSomthing(){

}

// difference between let and var

for(var i = 0;i<5;i++){
 // var example
setTimeout(()=>{
console.log(`This is var i value ${i}`);
},i+1000);
}

for(let i = 0;i<5;i++){
 // let example
setTimeout(()=>{
console.log(`This is var i value ${i}`);
},i+1000);
}

// concatination

var A = "frist"; // first
var B = "second";

// simple 

var concat = A+B;
console.log(concat);

// template string

var temp = `"first" A + B = ${concat}`; // "first"


// String manipulation methods

//split string
let str = "hello world"
for(let i =str.length;i>0;i-- ){
    console.log(str[i])// 'd', 'l' ,'r'
}

// split()

str.split("") //['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
str.split(" ")//['hello', 'world'];
// ['he', '', 'o wor', 'd']
let split =  str.split("");// returns array 























