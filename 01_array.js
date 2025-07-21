//Array

const myArray = [1, 2, 4, 3, 5, 6]
const myHeros = ["Ironman", "superman", "captain America", "deadpool"]

const myArray2 = new Array(2,3,5,3,6)

console.log(myArray2[1]);


//Array Method

myArray.push(999);
myArray.pop();
console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(19));

const newArr = myArray.join

console.log(myArray);
console.log(typeof newArr);

//slice, splice

console.log("A", myArray)
const myn1 = myArray.splice(1, 3)

console.log(myn1)
console.log("B", myArray)


const myn2 = myArray.splice(1, 3)
console.log(myn2)