// functions 


function sayMyName(){
console.log("S");
console.log("A");
console.log("T");
console.log("Y");
console.log("A");
console.log("M");
}

// sayMyName()

//addtwoNumber

// function mathBTNtwoNum(num1, num2){
//     console.log(num1+num2)
// }


// mathBTNtwoNum(2,40);


function addTwoNumber(num1, num2){
    return num1+num2
}

const Result = addTwoNumber(6,6);

// console.log("Result:", Result)


function loginUserMassage(username){
    if(!username){
          console.log("Plzz Enter a Username")
    }
      return `${username} just loggedIn!`
}

// console.log((loginUserMassage()))



function calculateCartprize(...num1){
    return num1

}

// console.log(calculateCartprize(200, 300, 400, 5000))

const user ={
    username:"Satyam",
    prise: 200
}

function handleObject(anyobje) {
    console.log(`username is ${anyobje.username} and prise is ${anyobje.prise}`)
}
handleObject(user);