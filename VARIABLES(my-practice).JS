const A = (num1)=>{
    if (typeof(num1) !== "number") {
        return "Please enter a valid number";
    }

    if (num1 % 2 === 0 ) {
        return "Even No"
    }
    
    return "Odd"

    // return typeof(num1) === "number" ? num1 % 2 === 0 ? "Even" : "odd" : "not a valid no";
};
 const result = A(4);
console.log(
    result
);

// console.log(typeof(typeof(678)));


// write a function which take only number as a parameter and return that no is even or odd;