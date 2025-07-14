// // const arr = [5,1,3,7];

// // function double(x) {
// //     return x * 2;
// // }

// // function triple(x) {
// //     return x *3;
// // }



// // const output = arr.map((x) => {
// //     x.toString(2)
// // });

// // console.log(output);



// // const arr = [1,3,5,3,6,9,0];

// // //filter odd values

// // function isOdd(x){
// //     return x%2;
// // }

// // const output = arr.filter(isOdd);
// // console.log(output);


// const arr = [1,3,5,3,6,9,0];

// //reduce
// //sum or max

// function findSum(arr) {
//     let sum = 0;
//     for (let i = 0; i<arr.length; i++) {
//         sum = sum + arr[1];
//     }
//     return sum;
// }
// console.log(findSum(arr));

// const outpur = arr.reduce(function(acc, curr){
//     acc = acc + curr;
//     return acc;
// }, 0);

// console.log(outpur)



const people = [
  {
    firstName: "Satyam",
    lastName: "Mishra",
    age: 10
  },
  {
    firstName: "Ananya",
    lastName: "Singh",
    age: 21
  },
  {
    firstName: "Rahul",
    lastName: "Verma",
    age: 23
  },
  {
    firstName: "Priya",
    lastName: "Sharma",
    age: 15
  }
];

// const output = people.map((x) => x.firstName+ " " +x.lastName
// );
// console.log(output);

const output = people.filter((x) => x.age<20);

console.log(output);