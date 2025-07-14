//What are the callback Functions In  JS?

setTimeout(function (){
 console.log("timer");
}, 5000);

function x(y){
console.log("x");
y();
}
x(function y(){
console.log("y");
})