// crete obje


//Obje litrals

const JsUser = {
    name: "Satyam",
    "full name": "satyam mishra",
    age: 18,
    location: "prayagraj",
    Email: "ssmishra@gmail.com",
    isLoggedIn: false,
    lastLoginDate: ["Monday","Tursday"]
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);   // u can not access the without this way

//const tinderuser = new object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Superman"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const newtinderuser = {
    email: "ssmishra@gmail.com",
    fullname: {
         userfullname:{
               firstname: "Satyam",
               lastName: "Mishra"
         }
    }
}

// console.log(newtinderuser.fullname);



const obj1 = { 1: "ABC", 2: "abc" };
const obj2 = { 3: "DEF", 4: "def" };
const obj3 = { 5: "GHI", 6: "ghi" };

const obj4 = {...obj1, ...obj2}
console.log(obj4)
