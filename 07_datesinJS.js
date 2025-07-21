//Date

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toUTCString());
console.log(myDate.toLocaleString())

//date is always Obj

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toUTCString());