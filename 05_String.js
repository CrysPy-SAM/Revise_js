const name = "Satyam"
const repoCount = 30

//console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Heyy-Satyam')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));  //check place of char or idexing
console.log(gameName.indexOf('S'));


const newStringOne = "   SATYAM   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://satyam.com/satyam%20mishra"

console.log(url.replace('%20', '-'))

console.log(url.includes('satyam'))