// Primitive 
// 7: String, Number, Boolean, null, undefined, BigInt, Symbol


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outdeTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const BigNumber = 3843642342343247832443232n

// Reference (Non primitive)
// Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "satyam",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World!")
}


console.log(typeof anotherId);